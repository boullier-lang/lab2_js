function changePic() 
{

  /* write code to change the picture to the one linked at:
  
    - https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png
    
	- change the width of the image
  */
  uri_img = document.getElementById("uri_logo");
  uri_img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Rhode_Island_Rams_logo.svg/1200px-Rhode_Island_Rams_logo.svg.png";
  uri_img.width="300";
}


function changeTags() 
{

  /* write code to change the color of all paragraphs to one of your choosing
  */
  paragraphs = document.getElementsByTagName("p");
  for(i=0; i<paragraphs.length; i++)
    {
      paragraphs[i].style.color="white";
    }
}


function removeParagraph() 
{
	/* write code to use a confirmation box to confirm that the  user wants to remove the paragraph where this button is located. If the user confirms, then remove this paragraph.
  */
  if(confirm("Do you truly wish to kill this paragraph?"))
    {
      our_paragraph = document.getElementById("tinyParagraph");
      our_paragraph.remove();

    }
  
}