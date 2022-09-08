function scale(strIn,k,v)
{
  if (strIn === "")
   return "";
  
  strIn = strIn.split("\n");
  var strOut = [];
  var strOut2 = [];
  var finalStr = "";
  
  // horizontal scale
  for (var loop = 0; loop < strIn.length; loop ++)
  {
    strOut[loop]="";
    for (var loop2 = 0; loop2 < strIn[loop].length; loop2 ++)
    {
      for (var loop3 = 0; loop3 < k; loop3 ++)
        strOut[loop]+=(strIn[loop][loop2]);
    }
    console.log (strOut[loop]);
  }
  
  // vertical scale
  for (loop = 0; loop < strOut.length; loop ++)
  {
    for (loop2 = 0; loop2 < v; loop2 ++)
    {
      finalStr += "\n" +(strOut[loop]);
    }
  }
  
  finalStr = finalStr.slice(1);
  return finalStr;
}

