import Slider from '../components/Slider';
import sliderImages from '../data';
export default function Home() {
  return (
    <div className='w-full h-[500px] mt-10'>
        <Slider sliderImages={sliderImages} />
    </div>
  );
}