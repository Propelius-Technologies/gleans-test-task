'use client';
import { setLinkMeta } from '@/utils/storage.utils';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { FiLoader } from 'react-icons/fi';

import textStyles from 'src/styles/typography.module.css';
import styles from './style.module.css';
import { LinkMeta } from '@/types/model';
import { isUrlValid } from '@/utils/strings.utils';

interface Props {
  handleSubmit: () => void;
}

const LinkInput: FC<Props> = ({ handleSubmit }) => {
  const [inputValue, setValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const toggleTouched = () => setTouched((prev) => !prev);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;

    if (!value) setTouched(false);

    setValue(value);
  };

  const onSubmit: FormEventHandler = async (evt) => {
    evt.preventDefault();

    if (!isUrlValid(inputValue)) {
      const meta: LinkMeta = {
        title: inputValue,
        description: '',
        domain: '',
        duration: 0,
        images: [],
        url: '',
      };
      handleSubmit();
      setLinkMeta(meta);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonlink.io/api/extract?url=${inputValue}`
      );
      const parsedRes = await res.json();

      setLinkMeta(parsedRes);

      handleSubmit();
    } catch (err) {
      console.log('error fetching link');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='font-primary flex gap-x-2 relative items-center rounded-full w-full py-5 px-4 bg-ga-grey bg-opacity-10'>
        <p className='text-xl'>🔗</p>

        <div className='h-full w-full'>
          {!touched ? (
            <p
              onClick={toggleTouched}
              className={`${textStyles.subtitle_1_normal} text-white text-opacity-50 m-0 p-0`}
            >
              <span className='text-white text-opacity-1'>Add a Link</span>,
              title or collection name
            </p>
          ) : (
            <input
              autoFocus
              onChange={handleChange}
              className={`bg-transparent ${styles.linkFade} text-white h-full w-full outline-none border-0 ${textStyles.subtitle_1_normal}`}
            />
          )}
        </div>

        {inputValue && (
          <button
            className={`rounded-full absolute right-0 mr-2 shadow-[-15px_0px_25px_rgba(0,0,0,1)] bg-white px-5 py-3 capitalize text-black ${
              textStyles.button
            } ${loading ? 'bg-opacity-50 py-4 px-6' : ''}`}
          >
            {loading ? (
              <FiLoader className='animate-spin text-opacity-100' />
            ) : (
              'Add'
            )}
          </button>
        )}
      </div>
    </form>
  );
};

export default LinkInput;
