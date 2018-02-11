	function entityM(){
			for (a = 0; a < (TotalEntities); a++){
				if (Dead[a] == 0){
				//Moving
					ColWall();
					PosX[a] += VelX[a];
					PosY[a] += VelY[a];

					$('#'+a+'').css("left",""+(PosX[a])+"");
					$('#'+a+'').css("top",""+(PosY[a])+"");			
				//New Velocity
					VelX[a] += AccX[a];
					VelY[a] += AccY[a];						
				//New Forces
					ForX[a] = 0;
					ForY[a] = 0;
					for (b = 0; b < (TotalEntities); b++){
						if (a != b && Dead[b] == 0){
							fMag = ((GConstant * Mass[a] * Mass[b])/((Math.pow(PosX[a]-Offset[a]-PosX[b]+Offset[b],2))+(Math.pow(PosY[a]-Offset[a]-PosY[b]+Offset[b],2))));
							Ang = Math.atan2(PosX[b]-PosX[a],PosY[b]-PosY[a]);
							ForX[a] += (fMag*Math.sin(Ang));
							ForY[a] += (fMag*Math.cos(Ang));
							col();
							if (coli == 1){
								del();
							}
						}
					}
				//New Acceleration
				$('#'+a+'').html(Mass[a]);
				fMMag = Math.sqrt((Math.pow(ForX[a],2))+(Math.pow(ForY[a],2)));
				AccM =  fMMag/Mass[a];
				AccX[a] = ForX[a]/Mass[a];
				AccY[a] = ForY[a]/Mass[a];
				}		
			}
	}
	function col(){
	coli = 0;
		for (l = 0; l < 2;l++){
			for (j = 0; j < 2; j++){
				if (((PosX[a] + (l * Length[a])) > PosX[b]) && ((PosX[a] + (l * Length[a])) < (PosX[b]+Length[b])) && ((PosY[a] + (j * Length[a])) > PosY[b]) && ((PosY[a] + (j * Length[a])) < (PosY[b] + Length[b]))){
					coli = 1;
				}
			}
		}
	}
	function del(){
	
			Dead[a] = 1;
			Dead[b] = 1;
		if (Dead[a] == 1 && Dead[b] && 1){	
			NewE = TotalEntities;
			TotalEntities++;

			EntityN = NewE;			
			
			Mass[NewE] = Mass[a] + Mass[b];
			
			//Length[NewE] = Math.sqrt(Mass[NewE]);
			Length[NewE] = 4;
			Offset[NewE] = Length[NewE]/2;
			
			if (Mass[a] > Mass[b]){
				PosX[NewE]= PosX[a] + Offset[a] - Offset[NewE];
				PosY[NewE] = PosY[a] + Offset[a] - Offset[NewE];
			}
			else if (Mass[a] < Mass[b]){
				PosX[NewE]= PosX[b] + Offset[b] - Offset[NewE];
				PosY[NewE] = PosY[b] + Offset[b] - Offset[NewE];
			}
			else{
				PosX[NewE] = (PosX[b] + PosX[a])/2;
				PosY[NewE] = (PosY[b] + PosY[a])/2;
			}
			Dead[NewE] = 0;
						
			VelX[NewE] = (Mass[a]*VelX[a] + Mass[b]*VelX[b])/(Mass[a]+Mass[b]);
			VelY[NewE] = (Mass[a]*VelY[a] + Mass[b]*VelY[b])/(Mass[a]+Mass[b]);
			
			if (PosX[a] + Length[NewE] < BlockW){
				PosX[NewE] = PosX[a];
			}
			else{
				PosX[NewE] = BlockW;
				VelX[NewE] *= -1;
			}
			if (PosY[a]+ Length[NewE] < BlockH){
				PosY[NewE] = PosY[a];
			}
			else{
				PosY[NewE] = BlockW;
				VelY[NewE] *= -1;
			}

			
			ForX[NewE] = 0;
			ForY[NewE] = 0;
			AccX[NewE] = 0;
			AccY[NewE] = 0;
			
			Color[NewE] = Math.floor(255/Mass[NewE]);
			$('#div').append("<span id='"+NewE+"'></span>");
			$('#'+NewE+'').css("left",""+PosX[NewE]+"");
			$('#'+NewE+'').css("top",""+PosY[NewE]+"");
			$('#'+NewE+'').css({'width' : Length[NewE] });
			$('#'+NewE+'').css({'height' : Length[NewE] });
			$('#'+NewE+'').css('background-color', 'rgb(' + Color[NewE] + ',255,' + Color[NewE] + ')');
						
			VelX[a] = 0;
			VelY[a] = 0;
			AccX[a] = 0;
			AccY[a] = 0;
			PosX[a] = a * -10000;
			PosY[a] = 0;
			PosX[b] = b * -10000;
			PosY[b] = 0;
			
						
			VelX[b] = 0;
			VelY[b] = 0;
			AccY[b] = 0;
			AccX[b] = 0;
			
			Mass[a] = 0;
			Mass[b] = 0;
			$('#'+a+'').css("left",""+-10000+"");
			$('#'+a+'').css("top",""+-10000+"");
			
			$('#'+b+'').css("left",""+-10000+"");
			$('#'+b+'').css("top",""+-10000+"");

		}
	}
	function ColWall(){
		if ((PosX[a] + VelX[a]) < 0){
			VelX[a] *= -0.9;
			VelY[a] *= 0.9;
			
		}
		if ((PosX[a]+Length[a] + VelX[a]) > BlockW){
			VelX[a] *= -0.9;
			VelY[a] *= 0.9;
		}
		if ((PosY[a] + VelY[a]) < 0){
			VelY[a] *= -0.9;
			VelX[a] *= 0.9;
		}
		if ((PosY[a]+Length[a] + VelY[a]) > BlockH){
			VelY[a] *= -0.9;
			VelX[a] *= 0.9;
		}
		
	}
