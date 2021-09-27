import "./assets/app.css"
import Accordion from "./Accordion";
import Data from "./data" ;
function App() {
  return (
    <main>
      <section className="faq-container">
          <div className="main-faq-title">
            <h1>
              How to Login to Account.
            </h1>
          </div>
          <section className="faq-box">
            {
              Data.map((value,index)=>(
                <Accordion key={value.id} {...value}/>
              ))
            }
          </section>
      </section>
    </main>
  );
}

export default App;
