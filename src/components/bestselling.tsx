// "use client"
// import BestSellingcard from "./bestsellingprodectscard";
// import { useAppSelector } from "@/app/store/hooks";

// export default function BestSelling() {
//     const product = useAppSelector((state) => state.products);
//     const bestSell = product.slice(0, 6);
//     return (
//         <div id="bestselling" className="mb-[100px] mt-[100px]">
//             {/* <div className="text-center mb-15  ">
//                 <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo">
//                     Best Selling Products
//                 </h1>
//                 <div className="flex mt-2 justify-center ">
//                     <div className="w-16 h-1 rounded-full bg-myellow inline-flex " />
//                 </div>
//             </div>
//             <div className="flex flex-wrap justify-center gap-5 mt-[20px]">
//                 {
//                     bestSell.map((items:any, i) => (
//                         <BestSellingcard 
//                         key={i}
//                         src={items.image[0]} 
//                         alt={items.title} 
//                         title={items.title} 
//                         description={items.description} 
//                         price={items.price}
//                         category={items.category}
//                         buycard={items.cart}
//                         discount={items.discount}
//                          />
//                     ))
//                 }
//             </div> */}
//             {/* <div className="carousel w-full">
//                 <div id="item1" className="carousel-item w-full">
//                     <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
//                 </div>
//                 <div id="item2" className="carousel-item w-full">
//                     <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
//                 </div>
//                 <div id="item3" className="carousel-item w-full">
//                     <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
//                 </div>
//                 <div id="item4" className="carousel-item w-full">
//                     <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
//                 </div>
//             </div>
//             <div className="flex justify-center w-full py-2 gap-2">
//                 <a href="#item1" className="btn btn-xs">1</a>
//                 <a href="#item2" className="btn btn-xs">2</a>
//                 <a href="#item3" className="btn btn-xs">3</a>
//                 <a href="#item4" className="btn btn-xs">4</a>
//             </div>


//         </div> */}
//     )
// } 