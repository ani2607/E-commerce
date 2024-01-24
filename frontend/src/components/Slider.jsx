import { useState , useEffect } from "react";
const Slider = () => {
    const sliderImages = ['https://upload.wikimedia.org/wikipedia/commons/e/e6/Apple_Thunderbolt_Display.png','https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1653084303665','https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845699311','https://s.yimg.com/uu/api/res/1.2/W8j_oDrrzT40FHffvt4s1w--~B/aD0xMzgzO3c9MTk4MjthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-03/7213abd0-aabf-11ec-bd67-bd41cc3375a9.cf.jpg','https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg'];

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
            <button onClick = {handleClickPrevious} className="z-10 bg-red-100 rounded-full h-9 my-[160px] font-bold">&lt;</button>        
            {/* <img src={sliderImages[index]} alt="Image" className="my-10 relative w-full h-[300px] transition-all duration-300"/> */}
            {sliderImages.map((imageURL,i)=>(
                <img key={i} src={imageURL} className = {"my-10 relative w-[1400px] h-[300px] object-contain " + (index == i ? "block" : "hidden")} alt="Slider Image" />
            ))}
            <button onClick = {handleClickNext} className="z-10 bg-red-100 rounded-full h-9 my-[160px] font-bold">&gt;</button>
        </div>
    )
}

export default Slider;