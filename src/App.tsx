import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/unshared/Header.component'
import Home from './pages/Home.page'
import { useEffect, useState } from 'react';
import Sidebar from './components/unshared/Sidebar.component';

function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isHamActive, setIsHamActive] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  function headerShowHideHandler() {
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY) {
      setIsHeaderVisible(false);
    }
    else{
      setIsHeaderVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  };

  
  useEffect(() => {
    window.addEventListener("scroll", headerShowHideHandler);

    return() => window.removeEventListener("scroll", headerShowHideHandler);
  }, [lastScrollY]);

  return (
    <BrowserRouter>
      <Header isHeaderVisible={isHeaderVisible} isHamActive={isHamActive} setIsHamActive={setIsHamActive} glassSurface="5px" />
      <Sidebar isHamActive={isHamActive} setIsHamActive={setIsHamActive} />
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App




//node
//var instance = new Razorpay({ key_id: 'YOUR_KEY_ID', key_secret: 'YOUR_SECRET' })

//instance.orders.create({
//  amount: 50000,
//  currency: "INR",
//  receipt: "receipt#1",
//  notes: {
//    key1: "value3",
//    key2: "value2"
//  }
//})

//curl
//curl -u [YOUR_KEY_ID]:[YOUR_KEY_SECRET] \
//-X POST https://api.razorpay.com/v1/orders \
//-H "content-type: application/json" \
//-d '{
//  "amount": 5000,
//  "currency": "INR",
//  "receipt": "receipt#1",
//  "notes": {
//    "key1": "value3",
//    "key2": "value2"
//  }
//}'


//java
//RazorpayClient razorpay = new RazorpayClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");

//JSONObject orderRequest = new JSONObject();
//orderRequest.put("amount",5000);
//orderRequest.put("currency","INR");
//orderRequest.put("receipt", "receipt#1");
//JSONObject notes = new JSONObject();
//notes.put("notes_key_1","Tea, Earl Grey, Hot");
//notes.put("notes_key_1","Tea, Earl Grey, Hot");
//orderRequest.put("notes",notes);

//Order order = razorpay.orders.create(orderRequest);


//import razorpay
//client = razorpay.Client(auth=("YOUR_ID", "YOUR_SECRET"))

//client.order.create({
//  "amount": 5000,
//  "currency": "INR",
//  "receipt": "receipt#1",
//  "notes": {
//    "key1": "value3",
//    "key2": "value2"
//  }
//})

//go
//import ( razorpay "github.com/razorpay/razorpay-go" )
//client := razorpay.NewClient("YOUR_KEY_ID", "YOUR_SECRET")

//data := map[string]interface{}{
//  "amount": 5000,
//  "currency": "INR",
//  "receipt": "some_receipt_id",
//  "partial_payment": false,
//  "notes": map[string]interface{}{
//      "key1": "value1",
//      "key2": "value2",
//    } 
//}
//body, err := client.Order.Create(data, nil)


//php
//$api = new Api($key_id, $secret);
//$$api->order->create(array('receipt' => '123', 'amount' => 100, 'currency' => 'INR', 'notes'=> array('key1'=> 'value3','key2'=> 'value2')));


//.net
//RazorpayClient client = new RazorpayClient("[YOUR_KEY_ID]", "[YOUR_KEY_SECRET]");
//Dictionary<string, object> options = new Dictionary<string,object>();
//options.Add("amount", 5000); // amount in the smallest currency unit
//options.Add("receipt", "order_rcptid_11");
//options.Add("currency", "INR");
//Order order = client.Order.Create(options);