d3.csv("pairing.csv")
    .get(function(error, data){
      // console.log(Object.keys(data[0]));


      // console.log(data.length);

      var width = (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);
      var height = (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);

      var vertices = d3.range(data.length).map(function(d){ return [Math.random()*width,Math.random()*height]; });
      var areas = []

      data.forEach(function(d,i){
        var sum = 0;
        Object.keys(d).forEach(function(key){

          if(Number(d[key]))
              sum += Number(d[key]);
        });

        areas.push(sum);
      });

      console.log(areas);

      var svg = d3.select("body").append("svg").attr("width","100%").attr("height","100%");

      var chartGroup = svg.append("g").attr("class","bubbles");

      chartGroup
      .selectAll("circle")
        .data(vertices)
        .enter().append("circle")
                .attr("class", "balls")
                .attr("cx",function(d){ return d[0]; })
                .attr("cy",function(d){ return d[1]; })
                .attr("r",function(d,i){ return Math.sqrt(0.2*areas[i]);});

    });
