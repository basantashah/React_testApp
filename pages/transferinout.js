import Layout from '../components/Layout';

const TradingSetting = () => (
    <Layout>
        <div>
            <h1> Transfer In/Out</h1>
            <p> This is Transfer In and out page </p>




                <form action="results.php" method="POST" role="form" class="form-horizontal">
  <div class="form-group">
    <label for="searchterm" class="col-sm-2 control-label">Choose Search Type</label>
    <select name="searchtype" class="form-control">
      <option value="ip"> IP Adress </option>
      <option value="ss_name"> Software Services </option>
      <option value="IS"> ISBN </option>
    </select>
  </div>
  <div class="form-group">
    <label for="searchterm" class="col-sm-2 control-label">Choose Search Term</label>
    <div class="col-sm-10">
      {/* <input type="text" class="form-control" id="searchterm" name="searchterm"> </input> */}
    </div>
        </div>
        <div class="form-group">
                   <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default">Search</button>
           </div>
         </div>
            </form> 



        </div>
    </Layout>
    
);

export default TradingSetting;