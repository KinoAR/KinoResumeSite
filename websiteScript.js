//Testing javascript capabilities



var imageSource = new Array("resources\\image3.png", "resources\\image2.png", "resources\\image1.png"); //List of image sources
var stringSource = new Array(""); //Descriptions for each image on portfolio project
var i = 0;

function DisplayDate()
{
	var today = new Date();
	var myYear = today.getYear();
	myYear.toString().substr(2,2);
	var myMonth = today.getMonth() +1;
	var myDay = today.getDate();

	var testArray = document.getElementsByClassName("contentArea");
	testArray[0].innerHTML = (myYear + "/" + myMonth + "/" + myDay);
}

function ChangeImage() //Changes image on portfolio page
{
	webImage = document.getElementById("portfolioImage"); //get portfolio image reference
	if(webImage.getAttribute("src") == imageSource[i])  //check if image source matches array
	{
		if(i < imageSource.length - 1) //keeps array index within bounds
		{
		 i++;
		 webImage.src = imageSource[i];
	    }
	    else
	    	i = 0; webImage.src = imageSource[i]; //reset array
	}

}
