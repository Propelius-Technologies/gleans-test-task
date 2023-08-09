'use client';
import { LocalStorageKeys } from '@/constants/keys.constants';
import { ChangeEventHandler, FC, FormEventHandler, useState } from 'react';
import { FiLoader } from 'react-icons/fi';

import textStyles from 'src/styles/typography.module.css';

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

    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonlink.io/api/extract?url=${inputValue}`
      );

      const parsedRes = await res.json();
      localStorage.setItem(
        LocalStorageKeys.LINK_META,
        JSON.stringify(parsedRes)
      );

      handleSubmit()
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
              onBlur={toggleTouched}
              onChange={handleChange}
              className={`bg-transparent text-white h-full w-full outline-none border-0 ${textStyles.subtitle_1_normal}`}
            />
          )}
        </div>

        {inputValue && (
          <button
            className={`rounded-full absolute right-0 mr-2 shadow-[-12px_0px_30px_rgba(0,0,0,0.6)] bg-white px-5 py-3 capitalize text-black ${
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
