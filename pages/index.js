import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';

import Prices from '../components/Prices';

const Index = (props) => (
  <Layout>
    <div class = "jumbotron">
      <h1>PayHQ</h1>
      <p><small class="text-muted"> The exchange for cyrpto lovers </small></p>

      <p></p>
      
    


    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" data-toggle ="tab" href="#bandtradesetting"> Brand Trade Setting</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" data-toggle ="tab" href="#pricefeeds"> Price Feeds</a>
      </li>
    </ul>


      <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade active show" id="bandtradesetting">
        <div class ="row mt-4">
          <div class ="col-sm-6">
          <div class ="row">
          <form>
            <fieldset>
              <div class="form-group" >
                 <select class="form-control" id="conversion">
                  <option>ETH -> USDr</option>
                  <option>USDr -> ETH</option>
                  <option>BTC -> USDr</option>
                  <option>USDr -> BTC</option>
                  <option>BTC -> ETH</option>
                 </select>
              </div>
            </fieldset>
          </form>
          <form>
            <fieldset>
              <div class="form-group" >
                 <select class="form-control" id="conversion">
                  <option>Band #1</option>
                  <option>Band #2</option>
                  <option>Band #3</option>
                  <option>Band #4</option>
                  <option>Band #5</option>
                 </select>
              </div>
            </fieldset>
          </form>
          </div>
            <div class ="form-group">
              <div class = "row">
              <label class="col-form-label" for ="inputDefault">Price over feed average: </label>
              <input class="form-control" placeholder="Default input" id="inputDefault" type="text"></input>
              </div>
            </div>
            <div class ="form-group">
              <div class = "row">
              <label class="col-form-label" for ="inputDefault">your profit Band #1: </label>
              <input class="form-control" placeholder="Default input" id="inputDefault" type="text"></input>
              </div>
            </div>
            <div class ="form-group">
              <div class = "row">
              <label class="col-form-label" for ="inputDefault">ETH in Band #1: </label>
              <input class="form-control" placeholder="Default input" id="inputDefault" type="text"></input>
              </div>
            </div>
            <button type="submit" class="btn btn-primary" onclick="showInput();">Save</button>
            
          </div>
          <div class = "col-sm-6">
           <h3> Feed USDr price per ETH: </h3>
             <h3> over feed: </h3>

          </div>
          </div>
        </div>
        <div class="tab-pane fade" id="pricefeeds">
          <p> here will be the Price Feeds</p>
          <h1> hello </h1>
        </div>
      </div>
      </div>
      <Prices bpi={props.bpi}/>
          
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();

  return {
    bpi: data.bpi
  };
}


export default Index;