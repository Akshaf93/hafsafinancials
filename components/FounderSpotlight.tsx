import Image from "next/image";
// ... imports

export default function FounderSpotlight() {
  return (
    <section className="py-20...">
       {/* ... content ... */}
       <div className="relative w-full h-[500px]">
         <Image 
           src="/founder.jpeg"
           alt="Founder"
           fill
           className="object-cover"
           // 1. Ensure this is FALSE (or omitted, as false is default)
           priority={false}
           // 2. "lazy" is default, but you can be explicit
           loading="lazy"
           sizes="(max-width: 768px) 100vw, 50vw"
         />
       </div>
    </section>
  )
}