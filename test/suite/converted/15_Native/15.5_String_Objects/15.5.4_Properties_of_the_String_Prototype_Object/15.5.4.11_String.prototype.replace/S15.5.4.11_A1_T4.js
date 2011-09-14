// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String.prototype.replace (searchValue, replaceValue)
 *
 * @section 15.5.4.11
 * @path 15_Native/15.5_String_Objects/15.5.4_Properties_of_the_String_Prototype_Object/15.5.4.11_String.prototype.replace/S15.5.4.11_A1_T4.js
 * @description Call replace (searchValue, replaceValue) function with null and function(a1,a2,a3){return a2+"";} arguments of function object
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (function(){return "gnulluna"}().replace(null,function(a1,a2,a3){return a2+"";}) !== "g1una") {
  $ERROR('#1: function(){return "gnulluna"}().replace(null,function(a1,a2,a3){return a2+"";}) === "g1una". Actual: '+function(){return "gnulluna"}().replace(null,function(a1,a2,a3){return a2+"";}) );
}
//
//////////////////////////////////////////////////////////////////////////////
