function UnityProgress (dom) {
	this.progress = 0.0;
	this.message = "";
	this.dom = dom;

	var parent = dom.parentNode;

	var background = document.createElement("div");
	background.style.background = "#4D4D4D";
	background.style.position = "absolute";
	parent.appendChild(background);
	this.background = background;

	var logoImage = document.createElement("img");
	logoImage.src = "TemplateData/progresslogo.png"; 
	logoImage.style.position = "absolute";
	parent.appendChild(logoImage);
	this.logoImage = logoImage;
	this.logoImg = new Image();
	this.logoImg.src = this.logoImage.src;

	var progressFrame = document.createElement("img");
	progressFrame.src = "TemplateData/loadingbar.png"; 
	progressFrame.style.position = "absolute";
	parent.appendChild(progressFrame);
	this.progressFrame = progressFrame;
	this.progressFrameImg = new Image();
	this.progressFrameImg.src = this.progressFrame.src;

	var progressBar = document.createElement("img");
	progressBar.src = "TemplateData/fullbar.png"; 
	progressBar.style.position = "absolute";
	parent.appendChild(progressBar);
	this.progressBar = progressBar;

	var messageArea = document.createElement("p");
	messageArea.style.position = "absolute";
	parent.appendChild(messageArea);
	this.messageArea = messageArea;


	this.SetProgress = function (progress) { 
		if (this.progress < progress)
			this.progress = progress; 
		this.messageArea.style.display = "none";
		this.progressFrame.style.display = "inline";
		this.progressBar.style.display = "inline";			
		this.Update();
	}

	this.SetMessage = function (message) { 
		this.message = message; 
		this.background.style.display = "inline";
		this.logoImage.style.display = "inline";
		this.progressFrame.style.display = "none";
		this.progressBar.style.display = "none";			
		this.Update();
	}

	this.Clear = function() {
		this.background.style.display = "none";
		this.logoImage.style.display = "none";
		this.progressFrame.style.display = "none";
		this.progressBar.style.display = "none";
	}

	this.Update = function() {
		this.background.style.top = this.dom.offsetTop + 'px';
		this.background.style.left = this.dom.offsetLeft + 'px';
		this.background.style.width = this.dom.offsetWidth + 'px';
		this.background.style.height = this.dom.offsetHeight + 'px';

		this.logoImage.style.top = this.dom.offsetTop + (this.dom.offsetHeight * 0.5 - this.logoImg.height * 0.5) + 'px';
		this.logoImage.style.left = this.dom.offsetLeft + (this.dom.offsetWidth * 0.5 - this.logoImg.width * 0.5) + 'px';
		this.logoImage.style.width = this.logoImg.width+'px';
		this.logoImage.style.height = this.logoImg.height+'px';

		this.progressFrame.style.top = this.dom.offsetTop + (this.dom.offsetHeight * 0.5 + this.logoImg.height * 0.5 + 10) + 'px';
		this.progressFrame.style.left = this.dom.offsetLeft + (this.dom.offsetWidth * 0.5 - this.progressFrameImg.width * 0.5) + 'px';
		this.progressFrame.width = this.progressFrameImg.width;
		this.progressFrame.height = this.progressFrameImg.height;

		this.progressBar.style.top = this.progressFrame.style.top;
		this.progressBar.style.left = this.progressFrame.style.left;
		this.progressBar.width = this.progressFrameImg.width * Math.min(this.progress, 1);
		this.progressBar.height = this.progressFrameImg.height;

		this.messageArea.style.top = this.progressFrame.style.top;
		this.messageArea.style.left = 0;
		this.messageArea.style.width = '100%';
		this.messageArea.style.textAlign = 'center';
		this.messageArea.innerHTML = this.message;
	}

	this.Update ();
}