	var comecou = true;
		var atualizou_cena = false;

		function atualizaCena() {
			min = 6;
			max = 12;
			if (comecou) {
				//escolheu a altura do cano da frente
				var alturaCanoAltoAtras = (Math.floor(Math.random() * (max - min)) + min) / 2;
				var alturaCanoBaixoAtras = alturaCanoAltoAtras - 7.5;
				comecou = false;
			} else {
				//a altura do cano de tras passa a ser o da frente
				alturaCanoAltoAtras = alturaCanoAltoFrente;
				alturaCanoBaixoAtras = alturaCanoBaixoFrente;
			}

			alturaCanoAltoFrente = (Math.floor(Math.random() * (max - min)) + min) / 2;
			alturaCanoBaixoFrente = alturaCanoAltoFrente - 7.5;

			//pega o atributo position de um cano
			canoBaixoFrente = document.getElementById("cano-baixo-frente");
			vet = canoBaixoFrente.getAttribute("position");
			//define a posicao inicial
			posicaoCanoBaixoFrente = "11 " + alturaCanoBaixoFrente + " -6";
			canoBaixoFrente.setAttribute("position", posicaoCanoBaixoFrente);
			//define a posição final
			movimentoCanoBaixoFrente = "0 " + alturaCanoBaixoFrente + " -6";
			canoBaixoFrente.setAttribute("animation", "property: position;to: " + movimentoCanoBaixoFrente + "; dur: 2000; easing: linear;");

			canoAltoFrente = document.getElementById("cano-alto-frente");
			vet = canoAltoFrente.getAttribute("position");
			posicaoCanoAltoFrente = "11 " + alturaCanoAltoFrente + " -6";
			canoAltoFrente.setAttribute("position", posicaoCanoAltoFrente);
			movimentoCanoAltoFrente = "0 " + alturaCanoAltoFrente + " -6";
			canoAltoFrente.setAttribute("animation", "property: position; to: " + movimentoCanoAltoFrente + "; dur: 2000; easing: linear;");

			canoBaixoAtras = document.getElementById("cano-baixo-atras");
			vet = canoBaixoAtras.getAttribute("position");
			posicaoCanoBaixoAtras = "0 " + alturaCanoBaixoAtras + " -6";
			canoBaixoAtras.setAttribute("position", posicaoCanoBaixoAtras);
			movimentoCanoBaixoAtras = "-11 " + alturaCanoBaixoAtras + " -6";
			canoBaixoAtras.setAttribute("animation", "property: position; to: " + movimentoCanoBaixoAtras + "; dur: 2000; easing: linear; ");

			canoAltoAtras = document.getElementById("cano-alto-atras");
			vet = canoAltoAtras.getAttribute("position");
			posicaoCanoAltoAtras = "0 " + alturaCanoAltoAtras + " -6";
			canoAltoAtras.setAttribute("position", posicaoCanoAltoAtras);
			movimentoCanoAltoAtras = "-11 " + alturaCanoAltoAtras + " -6";
			canoAltoAtras.setAttribute("animation", "property: position; to: " + movimentoCanoAltoAtras + "; dur: 2000; easing: linear; ");
		}

		atualizaCena();

		document.getElementById("cano-baixo-frente").addEventListener('animationcomplete', atualizaCena);
		document.getElementById("cano-alto-frente").addEventListener('animationcomplete', atualizaCena);
		document.getElementById("cano-baixo-atras").addEventListener('animationcomplete', atualizaCena);
		document.getElementById("cano-alto-atras").addEventListener('animationcomplete', atualizaCena);


