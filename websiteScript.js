//Testing javascript capabilities

var imageSource = new Array("resources\\image3.png", "resources\\image2.png", "resources\\image4.gif"); //List of image sources
var stringSource = new Array(
	"This is a picture of a UI script I developed. The script uses coroutines to create fluid animation," +
    " and hold data for other parts of the UI. <br>" +
    "Here is a code snippet from the script <br>"+
    '<img src="resources\\UpdateScoreSource.png" alt="code snippet">',
    "This portfolio contains pictures of my work during past projects." +
    " If you click on the image, you will see different pictures of work I've done in the past."); //Descriptions for each image on portfolio project
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
	var webImage = document.getElementById("portfolioImage"); //get portfolio image reference
	var imageDescription = document.getElementById("imageDescription")

	if(webImage.getAttribute("src") == imageSource[i])  //check if image source matches array
	{

		if(i < imageSource.length - 1) //keeps array index within bounds
		{
		 i++;
		 webImage.src = imageSource[i];
		 if(webImage.getAttribute("src") == imageSource[2])
		 {
		   imageDescription.innerHTML = stringSource[0]; 
		   webImage.style.width = '500px'; 
		   webImage.style.height = '100px';
		 }

	    }
	    else
	    {
	    	i = 0; webImage.src = imageSource[i]; //reset array
		    webImage.style.width = '250px';
		    webImage.style.height = '250px';
		    imageDescription.innerHTML = stringSource[1];
	    }
	}

}
