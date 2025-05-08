import './Product.css';

const Product = ({ title, price }) => {
  // console.log(features);
  // console.log(features2);
  // const list = features.map((feature) => <li key={feature}>{feature}</li>);
  // Applying conditionals,
  //   if (price > 20) {
  //     return (
  //       <div className='Product'>
  //         <h2>{title}</h2>
  //         <h5>Price :{price}</h5>
  //         {/* <ul>{list}</ul> */}
  //         {/* <p>{features2.a}</p>
  //       <p>{features2.b}</p>
  //       <p>{features2.c}</p> */}
  //         <p>Discount of 5%</p>
  //       </div>
  //     );
  //   } else {
  //     <div className='Product'>
  //       <h2>{title}</h2>
  //       <h5>Price :{price}</h5>
      
  //     </div>
  //   }
  // 
  // Alternatively, use ternary operator for conditionals,
  let isDiscount = price > 30 ? "5%" : <a href='#'>Get Discount</a>;
  let style = { backgroundColor: price>30?"yellow":"" };
  return (
    <div className='Product' >
      <h2>{title}</h2>
      <h5 style={style}>Price :{price}</h5>
    
      <p>{isDiscount}</p>
    </div>
  );
}
export default Product;
