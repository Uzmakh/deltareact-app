import Product from "./Product";

const ProductTab = () => {
    let options = ["hi-tech","durable","fast"]
    let options2 = { a: "hi-tech", b: "durable", c: "fast" };
  return (
    <>
          <Product title='phone' price="30" features={options} features2={options2} />    
      <Product title='tablet' price="40"/>
      <Product title='desktop' price="50"/>
    </>
  );
};

export default ProductTab;
