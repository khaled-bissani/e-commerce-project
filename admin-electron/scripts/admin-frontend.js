const go_dashboard=document.querySelector('#to-dashboard');
const go_client=document.querySelector('#to-client');
const go_seller=document.querySelector('#to-seller');
const dashboard=document.querySelector('#dashboard');
const client_form=document.querySelector('#client-form');
const seller_form=document.querySelector('#seller-form');

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


//specify d3 element attributes
const width = 800;
const height = 400;
const margin = { top: 30, bottom: 30, left: 65, right: 30 };


//create d3 element - histogram sellers
/*const svg = d3.select('#seller-histogram')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .attr("viewBox", [0, 0, width, height]);*/

//range x-axis  
const x = d3.scaleBand()
  .domain(d3.range(data.length))
  .range([margin.left, width])
  .padding(0.1)
  
//range y-axis  
const y = d3.scaleLinear()
  //.domain([0, 100])
  .range([height - margin.bottom, margin.top])

//group svg element  
svg
  .append("g")
  .attr("fill", 'royalblue')
  .selectAll("rect")
  //.data(data.sort((a, b) => d3.descending()))
  .join("rect")
    //.attr("x", (d, i) => x(i))
    //.attr("y", d => y())
    //.attr('title', (d) => )
    .attr("class", "rect")
    //.attr("height", d => y(0) - y())
    .attr("width", x.bandwidth());

//design y-axis    
const yAxis=(g) =>{
  g.attr("transform", `translate(${margin.left}, 0)`)
    //.call(d3.axisLeft(y).ticks(null, data.format))
    .attr("font-size", '20px')
    .attr("color", 'grey')
}
// design x-axis
const xAxis=(g) =>{
  g.attr("transform", `translate(0,${height - margin.bottom})`)
    //.call(d3.axisBottom(x).tickFormat(i =>))
    .attr("font-size", '20px')
    .attr("color", 'grey')
}

svg.append("g").call(xAxis);
svg.append("g").call(yAxis);
svg.node();



