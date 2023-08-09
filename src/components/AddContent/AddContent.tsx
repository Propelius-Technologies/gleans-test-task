import Step1 from './Step1/Step1';
import Step2 from './Step2/Step2';

const AddContent = () => {
  return (
    <div className='h-full w-full'>
      <div className='fixed top-0 left-0 right-0 bottom-0 animate-blur' />
      {/* <Step1 /> */}
      <Step2 />
    </div>
  );
};

export default AddContent;
