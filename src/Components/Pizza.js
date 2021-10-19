import "./Pizza.css";

function Pizza() {
  return (
    <div id="container">
      <img
        id="image"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*"
      />
      <div id="item1">
        <h1>Pepperoni Pizza</h1>
      </div>
      <p id="title"> Try, but with care Try, but with care Try, but with care Try, but with care Try, but with care </p>
      <div id="items2">
        <div> 265cal</div>
        <div>P/F/C:12/10/21</div>
        <div>53.8 C</div>
      </div>

      <div id="items3">
        <div>$23.56 </div>
        <div id="cut">$29.52</div>
        <button id="btn">ORDER</button>
      </div>
    </div>
  );
}
export { Pizza };
