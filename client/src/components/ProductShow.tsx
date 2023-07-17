import { useEffect, useState } from "react";
import { hero0, hero1, hero2, hero3 } from "../assets"

export const ProductShow = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [hero0, hero1, hero2, hero3];

     useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000)
         return () => {
            clearInterval(interval);
        }
    }, [])
   return (
    <div className="flexCenter mt-4 -mb-4">
        <img 
            loading="lazy"
            src={slides[currentSlide]}
            alt={'Product'}
            className="xs:h-32" 
        />
    </div>
  )
}