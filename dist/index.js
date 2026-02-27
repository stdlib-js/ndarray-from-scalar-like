"use strict";var f=function(t,r){return function(){return r||t((r={exports:{}}).exports,r),r.exports}};var l=f(function(A,o){"use strict";var d=require("@stdlib/assert-has-own-property"),p=require("@stdlib/assert-is-plain-object"),q=require("@stdlib/assert-is-number").isPrimitive,m=require("@stdlib/array-base-assert-is-complex-floating-point-data-type"),c=require("@stdlib/array-base-assert-is-accessor-array"),g=require("@stdlib/assert-is-ndarray-like"),b=require("@stdlib/array-base-accessor-setter"),w=require("@stdlib/array-base-setter"),h=require("@stdlib/ndarray-base-buffer"),O=require("@stdlib/ndarray-dtype"),T=require("@stdlib/ndarray-order"),E=require("@stdlib/ndarray-ctor"),v=require("@stdlib/string-format");function P(t,r,e){var a,u,y,n,i,s;if(!g(t))throw new TypeError(v("invalid argument. First argument must be an ndarray. Value: `%s`.",t));if(a={dtype:O(t),order:T(t),readonly:!1},arguments.length>2){if(!p(e))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",e));d(e,"dtype")&&(a.dtype=e.dtype),d(e,"order")&&(a.order=e.order),d(e,"readonly")&&(a.readonly=e.readonly)}if(y=q(r),i=a.dtype,u=h(i,1),u===null)throw new TypeError(v("invalid option. `%s` option must be a recognized data type. Option: `%s`.","dtype",i));return m(i)&&y?s=[r,0]:s=r,c(u)?n=b(i):n=w(i),n(u,0,s),new E(i,u,[],[0],0,a.order,a)}o.exports=P});var j=l();module.exports=j;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
