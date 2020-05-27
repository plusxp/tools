
	 /////////////////////////////////////////////////////////////////////////////////
    ///
   ///     JSCMS v1.03 		 	
  ///      Copyright SIX ORANGES ;  info@ci3.net
 ///
/////////////////////////////////////////////////////////////////////////////////



function writePageDetails()
{
  with (document)
  {
	var table_of_contents = "list";  // change to your default frame page

    var blank = " "; // blank page
    var content = (location.search) ? location.search.substring(1, location.search.length) : table_of_contents;
	
	write(Page[content]);
  
  }
}


function writePageList(Page)
{
  with (document)
  {
    write("");
    var j = 0;
    var first;
    write("<table >");
    for (i in Page)
    {
       first = i;
       write("<tr>");
         write("<td class='text_navig_bar'><a href='");
       write("Page.htm?");
       write(i);
       write("'><span class='title_Page'>");
       write(i);
       write("</span></a><br>");
	   write("");
	   write(Page[i].substring(0,100));
       write("...<br><a href='Page.htm'>[Read more]</a><br><br>");
	   write("</td>");
       j++
       write("</tr>");
	   if (j == 3) break; 
	}
    write("</table>");
  }
}


function writeMenu(Page)
{
  with (document)
  {
    write("");
    var j = 0;
    var first;
	var contentvalue;

    write("<table>");
    write("<tr>");
	for (i in Page)
    {
       first = i;
	   if (j>0)
	   {
       write("<td class=\"jsmenu\"> | </td>");
	   }
       write("<td widtn=60 nowrap class=\"jsmenu\">");

	   contentvalue = Page[i];	
	   if (contentvalue.substring(0, 7)=="http://")
	   {
		   write("<a href=\"" + contentvalue + "\">");
		   write(i);
		   write("</a>");

	   }	
       else {
		   write("<a href=\"?q=\" onClick=\"setContent('"+i+"');\" class=\"jsmenu\">");
		   write(i);
		   write("</a>");
       }
	   
	   write("</td>");
       j++
       
    }
	write("</tr>");
    write("</table>");
  }
}




function setContent(zz)
{
			document.getElementById("myContent").innerHTML = "<span class=\"title_Page\">"+Page[zz]+"</span>";
}




function OpenWin(address, whatis) {    
	var op_tool  =  0;    
	var op_loc_box  =  0;    
	var op_dir  =  0;    
	var op_stat  =  0;    
	var op_menu  =  0;    
	var op_scroll  =  1;    
	var op_resize  =  0;    
	var op_wid  = 520;   
	var op_heigh = 440;                 
	var option = "toolbar="+ op_tool +",location="+ op_loc_box +",directories=" 
+ op_dir +",status="+ op_stat +",menubar="+ op_menu +",scrollbars="  
+ op_scroll +",resizable="  + op_resize +",width=" + op_wid +",height="+ op_heigh +",left=500,top=300";
	//var win3 = window.open("", "what_I_want", option);  
	
	if ( whatis=="" ) {
	myString = new String(address);
	rExp = "images/designthumbs/";
	address = myString.replace(rExp, "images/design/");
	var win4 = window.open(address, "what_I_want", option);
    }
	else
	{
	var win4 = window.open(whatis, "what_I_want");
	}
}