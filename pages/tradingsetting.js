import Layout from '../components/Layout';

const TradingSetting = () => (
    <Layout>
        <div class="jumbotron">
            <h1> Tradding Setting</h1>
            <p> This is trading setting page </p>
            
            <ul class="nav nav-tabs">
                <li class="nav-item">
                      <a class="nav-link active" data-toggle ="tab" href="#bandtradesetting"> Brand Trade Setting</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" data-toggle ="tab" href="#pricefeeds"> Price Feeds</a>
                </li>
             </ul>
        </div>
        <div id="myTableContent" class="tab-content">
            <div class="tab-pane fade active show" id="bandtradesetting">
                <fieldset class="form-check">
                    <div cass="form-check">
                        <label class="form-check-label">
                            {/* <input class="form-check-input" value="" checked="" type="checkbox">CoinMarketCap.com </input> */}

                             
                        </label>
                    </div>
                </fieldset>
            </div>
        </div>
        {/* <div id="myTabContent" class="tab-content">
        <div class="tab-pane fade active show" id="bandtradesetting">
        <div class ="row mt-4">
            <fieldset class="form-group">
                    <div class="form-check">
                        <label class="form-check-label">
                            <input class="form-check-input" value="" checked="" type="checkbox">CoinMarketCap.com </input>
                            <input class="form-check-input" value="" checked="" type="checkbox">CoinMarketCap.com </input>
                            <input class="form-check-input" value="" checked="" type="checkbox">CoinMarketCap.com </input>
                        </label>
                    </div>
             </fieldset>
        </div>
        </div> */}

    </Layout>
    
);

export default TradingSetting;