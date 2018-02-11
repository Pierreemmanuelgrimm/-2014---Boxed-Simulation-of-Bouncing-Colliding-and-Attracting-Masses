$(document).ready(function(){		
		BlockW = 1000;
		BlockH = 600;
		
		$('#div').css("width",""+BlockW+"");
		$('#div').css("height",""+BlockH+"");
		
		smallM = 1;
		bigM = 75;
		size3 = 50;
		size4 = 10;
		
		
		TotalEntities= smallM + bigM + size3 + size4;
		GConstant = 6.67 / Math.pow(10,11);
		
		EntityN = new Array(TotalEntities);
		PosX = new Array(TotalEntities);
		PosY = new Array(TotalEntities);
		VelX = new Array(TotalEntities);
		VelY = new Array(TotalEntities);
		ForX = new Array(TotalEntities);
		ForY = new Array(TotalEntities);
		Mass = new Array(TotalEntities);
		AccX = new Array(TotalEntities);
		AccY = new Array(TotalEntities);
		
		Length = new Array(TotalEntities);
		Offset = new Array(TotalEntities);
		Dead = new Array(TotalEntities);
		Color = new Array(TotalEntities);
		
		for (i = 0; i < smallM; i++){
			Mass[i] = 0.00001;
		}
			
		for (i = smallM; i < (smallM + bigM); i++){
			Mass[i] = 5;
		}
		for (i = (smallM + bigM) ; i < (smallM + bigM + size3); i++){
			Mass[i] = 1000000000;
		}	
		for (i = (smallM + bigM + size3) ; i < (smallM + bigM + size3 + size4); i++){
			Mass[i] = 500000000000;
		}		
		for (i = 0; i < (TotalEntities); i++){
			//Length[i] = Math.sqrt(Mass[i]);
			Length[i] = 4;
			Offset[i] = Length[i]/2;
			EntityN = i;
			PosX[i] = Math.random()*BlockW*0.9;
			PosY[i] = Math.random()*BlockH*0.9;
			VelX[i] = (20*Math.random() - 10)/Mass[i];
			VelY[i] = (20*Math.random() - 10)/Mass[i];
			ForX[i] = 0;
			ForY[i] = 0;
			AccX[i] = 0;
			AccY[i] = 0;
			Dead[i] = 0;

			Color[i] = Math.floor(255/Mass[i]);
			$('#div').append("<span id='"+i+"'></span>");
			$('#'+i+'').css("left",""+PosX[i]+"");
			$('#'+i+'').css("top",""+PosY[i]+"");
			$('#'+i+'').css({'width' : Length[i] });
			$('#'+i+'').css({'height' : Length[i] });
			$('#'+i+'').css('background-color', 'rgb(' + Color[i] + ',255,' + Color[i] + ')');
               
		}
});