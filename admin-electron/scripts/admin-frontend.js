const go_dashboard=document.querySelector('#to-dashboard');
const go_client=document.querySelector('#to-client');
const go_seller=document.querySelector('#to-seller');
const dashboard=document.querySelector('#dashboard');
const client_form=document.querySelector('#client-form');
const seller_form=document.querySelector('#seller-form');
const time_seller=document.querySelector('#time-seller');
const time_client=document.querySelector('#time-client');


//open dashboard-from
go_dashboard.addEventListener('click',()=>{
  dashboard.style.display='block';
  client_form.style.display='none';
  seller_form.style.display='none';    
})

//open client-form
go_client.addEventListener('click',()=>{
  client_form.style.display='block';
  dashboard.style.display='none';  
  seller_form.style.display='none';  
})

//open seller-form
go_seller.addEventListener('click',()=>{
  seller_form.style.display='block';
  dashboard.style.display='none';  
  client_form.style.display='none';  
})

//check the option entered for seller side
time_seller.addEventListener('change',()=>{
  var range_seller=time_seller.value;
  axios.get(`http://localhost/ecommerce-server/admin-backend/seller_${range_seller}.php`).then((response) => {
  console.log('data123'+response.data);
  seller_histogram(response.data);
  })
})

//check the option entered for client side
time_client.addEventListener('change',()=>{
    var range_client=time_client.value;
    axios.get(`http://localhost/ecommerce-server/admin-backend/client_${range_client}.php`).then((response) => {
    client_histogram(response.data);
  })
})

//create seller histogram 
seller_histogram=(data)=>{
  
  const width = 800;
  const height = 400;
  const margin = { top: 30, bottom: 30, left: 65, right: 30 };

    
  //create d3 element - histogram sellers
  var svg = d3.select('#seller-histogram')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("viewBox", [0, 0, width, height]);

  //range x-axis  
  var x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width])
    .padding(0.1)
    
  //range y-axis  
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top])

  //group svg element  
  svg
    .append("g")
    .attr("fill", 'royalblue')
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.revenue,b.revenue)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.revenue/1000))
      .attr('title', (d) => d.revenue)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.revenue/1000))
      .attr("width", x.bandwidth());

  //design y-axis    
  const yAxis=(g) =>{
    g.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.revenue))
    .attr("font-size", '20px')
    .attr("color", 'grey')
  }

  //design x-axis
  const xAxis=(g) =>{
    g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name))
    .attr("font-size", '20px')
    .attr("color", 'grey')
  }

  svg.append("g").call(xAxis);
  svg.append("g").call(yAxis);
  svg.node();
}


//create client histogram
client_histogram=(data)=>{

  const width = 800;
  const height = 400;
  const margin = { top: 30, bottom: 30, left: 65, right: 30 };

  //create d3 element - histogram client
  var svg = d3.select('#client-histogram')
    .append('svg')
    .attr('width', width)
    .attr('height', height)
    .attr("viewBox", [0, 0, width, height]);

  //range x-axis  
  var x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width])
    .padding(0.1)

  //range y-axis  
  var y = d3.scaleLinear()
    .domain([0, 100])
    .range([height - margin.bottom, margin.top])

  //group svg element  
  svg
    .append("g")
    .attr("fill", 'orange')
    .selectAll("rect")
    .data(data.sort((a, b) => d3.descending(a.score, b.score)))
    .join("rect")
      .attr("x", (d, i) => x(i))
      .attr("y", d => y(d.count))
      .attr('title', (d) => d.count)
      .attr("class", "rect")
      .attr("height", d => y(0) - y(d.count))
      .attr("width", x.bandwidth());

  //design y-axis
  const yAxisc=(g)=> {
    g.attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(y).ticks(null, data.count))
    .attr("font-size", '20px')
  }

  //design x-axis
  const xAxisc=(g)=> {
    g.attr("transform", `translate(0,${height - margin.bottom})`)
    .call(d3.axisBottom(x).tickFormat(i => data[i].name))
    .attr("font-size", '20px')
  }

  svg.append("g").call(xAxisc);
  svg.append("g").call(yAxisc);
  svg.node();
}

