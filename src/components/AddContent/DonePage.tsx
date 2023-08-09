import CustomButton from 'src/components/shared/CustomButton';

const Done = () => {
  return (
    <div className='fixed top-0 left-0 min-h-screen w-full flex flex-col items-center justify-end pt-16 px-7'>
      <div className='flex pb-12'>
        <CustomButton color='success'>Done</CustomButton>
      </div>
    </div>
  );
};

export default Done;
