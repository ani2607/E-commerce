import { useState , useEffect } from "react";
import Left from "../assets/Arrow_1.png";
import Right from "../assets/Arrow_2.png";
import Display from "../assets/Display.png";
import Laptop from "../assets/laptop.jpg";
import Phone from "../assets/Phone.jpeg";
import Monitor from "../assets/Monitor.jpg";
import Watch from "../assets/Watch.jpeg";

const Slider = () => {
    const sliderImages = [Display,Laptop,Phone,Monitor,Watch];

    const [index,setIndex] = useState(0);
    const handleClickNext = () =>{
        if(index==(sliderImages.length-1)){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }
    }
    const handleClickPrevious = () =>{
        if(index==(0)){
            setIndex(sliderImages.length-1);
        }
        else{
            setIndex(index-1);
        }
    }

    useEffect(()=>{
        const interval = setTimeout(()=>{
            handleClickNext();
        },3000);

        return ()=>{clearTimeout(interval)};
    },[index])

    return(
        <div className="flex justify-center">
            <button className="h-1 w-10" onClick={handleClickPrevious}>
                <img src={Left} alt="Arrow image" className="mt-[200px]  w-[40px] top-1/3 left-1/2  w-100 z-1 " />
            </button>

            {sliderImages.map((imageURL,i)=>(
                <img key={i} src={imageURL} className = {"mb-3 mt-[80px] relative w-[1400px] h-[300px] object-contain " + (index == i ? "block" : "hidden") } alt="Slider Image" />
            ))}

            <button className="h-[10px] w-10" onClick={handleClickNext}>
                <img src={Right} alt="Arrow image" className="mt-[200px]  w-[40px] top-1/3 leaft-1/2  w-100 z-1" />
            </button>
        </div>
    )
}

export default Slider;