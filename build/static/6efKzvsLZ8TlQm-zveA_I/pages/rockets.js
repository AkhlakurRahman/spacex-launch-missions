(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"2y/O":function(n,e,r){"use strict";var t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});e.a=t},tptg:function(n,e,r){"use strict";r.r(e);var t=r("q1tI"),o=r.n(t),c=r("rt45"),i=r("ttZb"),a=r("lTCR"),l=r.n(a),u=r("vOnD"),s=r("HQGO"),f=r("YFqc"),m=r.n(f),d=r("2y/O"),g=o.a.createElement;function p(){var n=Object(c.a)(["\n  background: #e1f5fc;\n  width: 50%;\n  padding: 3rem;\n  margin-bottom: 5rem;\n  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  transition: all 0.4s;\n\n  :hover {\n    box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.4);\n    cursor: pointer;\n  }\n\n  :active {\n    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);\n  }\n\n  .main-content {\n    h3 {\n      font-size: 2.5rem;\n    }\n    p {\n      font-size: 1.4rem;\n      span {\n        font-weight: 400;\n      }\n      .success {\n        color: green;\n      }\n      .failed {\n        color: red;\n      }\n    }\n  }\n\n  a {\n    font-family: ",";\n    font-size: 1.7rem;\n    text-decoration: none;\n    border: 1px solid #6cd0e0;\n    border-radius: 0.2rem;\n    background: #63a8c7;\n    color: #fff;\n    padding: 1rem 2rem;\n    cursor: pointer;\n    transition: background 0.3s, color 0.5s;\n\n    :hover {\n      background: #fff;\n      color: #63a8c7;\n    }\n\n    :focus {\n      outline: none;\n    }\n  }\n"]);return p=function(){return n},n}var b=u.c.div(p(),function(n){return n.theme.font_display}),k=function(n){var e=n.rocket,r=e.rocket_id,t=e.rocket_name,o=e.rocket_type,c=e.cost_per_launch,i=e.first_flight;return g(b,null,g("div",{className:"main-content"},g("h3",null,t),g("p",null,g("strong",null,"Rocket Type: ")," ",o),g("p",null,g("strong",null,"Cost Per Launch:")," ",d.a.format(c)),g("p",null,g("strong",null,"First Flight:")," ",i)),g(m.a,{href:{pathname:"rocketDetails",query:{rocket_id:r}}},g("a",null,"Rocket Details")))},h=r("b0oO"),_=o.a.createElement;function w(){var n=Object(c.a)(["\n  {\n    rockets {\n      rocket_id\n      rocket_name\n      rocket_type\n      cost_per_launch\n      first_flight\n    }\n  }\n"]);return w=function(){return n},n}function v(){var n=Object(c.a)(["\n  background: linear-gradient(to right bottom, #8ee0ee, #b8e9f0);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem 0;\n  color: #142d38;\n\n  h2 {\n    font-size: 4.5rem;\n    margin: 4rem 0;\n    margin-left: -50rem;\n    font-weight: 400;\n  }\n"]);return v=function(){return n},n}var y=u.c.div(v()),O=l()(w()),x=function(){var n=Object(i.b)(O),e=n.loading,r=n.error,t=n.data;return e?_(s.a,null):r?_("p",null,"Error :("):_(y,null,_(h.a,null),_("h2",null,"Rockets"),t.rockets.map(function(n){return _(k,{key:n.rocket_id,rocket:n})}))},D=o.a.createElement;e.default=function(){return D("div",null,D(x,null))}},wDYY:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/rockets",function(){return r("tptg")}])}},[["wDYY",1,0]]]);