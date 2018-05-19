var actual_step = 1;
var number_formacao = 1;
var number_professional = 1;
var templateFeedback = "<div id = 'feedback-box-${id}' class='feedback-box card mt-1 mb-1 feedback-generic' ><div class='card-body text-feedback'> ${TEXT}</div></div>";
var number_feedback = 0;
var number_specialization = 1;

var templateFeedback = "<div id='feedback-box-${id}' class='feedback-box'>"
							+"<div class='feedback-box-header'>"
								+"<h2>+${type-feedback}</h2>"
							+"</div>"
							+"<div class='feedback-box-body  ${class-feedback}'>"
								+"<p>${feedback}<p>"
							+"</div>"
						+"</div>";
var templateFormacao = "<div class='form-row formacao' id='formacao-{id}' formacao-number='{formacao-number}'>"
						+"<div class='form-group col-sm-3'>"
							+"<label for='type_degree'>Formação</label>"
							+"<select redo-feedback='1' type-selection = 'select' type-feedback = 'type-formacao' formacao-number='{formacao-number}' class='form-control feedback type-degree' id='type_degree'>"
								+"<option> </option>"
								+"<option>Graduação</option>"
								+"<option>Especialização</option>"
								+"<option>Mestrado</option>"
								+"<option>Doutorado</option>"
							+"</select>	"						
						+"</div>"
						+"<div class='form-group col-sm-3'>"
							+"<label for='degree'>Curso</label>"
							+"<select redo-feedback='1' type-selection = 'select' type-feedback = 'degree' class='form-control feedback degree' formacao-number='{formacao-number}' id='degree'>"
								+"<option> </option>"
								+"<option>Biologia marinha</option>"
								+"<option>Biologia (licenciatura)</option>"
								+"<option>Biomedicina</option>"
								+"<option>Botânica</option>"
								+"<option>Ciências Agrárias (licenciatura)</option>"
								+"<option>Ciências Ambientais</option>"
								+"<option>Ciências Biológicas</option>"
								+"<option>Ciências da Saúde</option>"
								+"<option>Ciências do Meio Aquático</option>"
								+"<option>Ecologia</option>"
								+"<option>Educação física (licenciatura)</option>"
								+"<option>Enfermagem (licenciatura)</option>"
								+"<option>Fisioterapia</option>"
								+"<option>Fonoaudiologia</option>"
								+"<option>Gerontologia</option>"
								+"<option>Medicina</option>"
								+"<option>Medicina veterinária</option>"
								+"<option>Meteorologia</option>"
								+"<option>Microbiologia e Imunologia</option>"
								+"<option>Naturologia</option>"
								+"<option>Neurociência</option>"
								+"<option>Nutrição</option>"
								+"<option>Odontologia</option>"
								+"<option>Quiropraxia</option>"
								+"<option>Saúde Coletiva</option>"
								+"<option>Terapia ocupacional</option>"
								+"<option>Zootecnia</option>"
							+"</select>"
						+"</div>"
						
						
						+"<div class='form-group col-sm-5'>"

							+"<label for='school'>Instituição</label>"
							+"<select redo-feedback='1' type-selection = 'select' type-feedback = 'school' formacao-number='{formacao-number}' class='form-control feedback school' class='form-control' id='school'>"
								+"<option></option>"
								+"<option>Trevisan Escola de Negocios</option>"
								+"<option>Universidade Cândido Mendes (UCAM)</option>"
								+"<option>Universidade Castelo Branco (UCB)</option>"
								+"<option>Universidade Estácio de Sá</option>"
								+"<option>Universidade do Grande Rio (UNIGRANRIO)</option>"
								+"<option>Universidade Gama Filho (UGF)</option>"
								+"<option>Universidade Santa Úrsula (USU)</option>"
								+"<option>Universidade Severino Sombra (USS) Flamengo)</option>"
								+"<option>Universidade Veiga de Almeida (UVA)</option>"
								+"<option>Pontifícia Universidade Católica do Rio de Janeiro (PUCRIO)</option>"
								+"<option>Centro Brasileiro de Pesquisas Físicas (CBPF)</option>"
								+"<option>União das Instituições Eduçacionais do Estado de São Paulo (UNIESP)</option>"
								+"<option>Comissão Nacional de Energia Nuclear (CNEN)</option>"
							+"</select>"
						+"</div>"
						+"<div class='form-group col-sm-1 '>"
							+"<label for='type_degree'> &nbsp;</label>"
							+"<i id='type_degree' hidden data-target='#formacao'	class='form-control far fa-trash-alt trash-feedback'></i>"
						+"</div>"						
					+"</div>";


var templateOccupationSpecialization = " <div class='atuacao' id='atuacao-{id}'>"
											+"<hr class='mr-12'>"
											+"<div class='form-row'>"
												+"<div class='form-group col-sm-4'	>"
													+"<label for='occupation-area'>Área de Atuação</label>"
														+"<select  atuacao-number='{atuacao-number}' redo-feedback='1' type-selection = 'select' type-feedback = 'occupation-area' class='occupation-area form-control feedback' class='form-control' id='occupation-area'>"
														+"<option></option>"
														+"<option>Administração</option>"
														+"<option>Agricultura, Pecuária, Veterinária</option>"
														+"<option>Alimentação / Gastronomia</option>"
														+"<option>Arquitetura, Decoração, Design</option>"
														+"<option>Artes</option>"
														+"<option>Auditoria>"
														+"<option>Ciências, Pesquisa</option>"
														+"<option>Comercial, Vendas</option>"
														+"<option>Engenharia</option>"
														+"</select>"
												+"</div>"
												+"<div class=' col-sm-8 float-right form-group'> "
													+"<div class='div-delete'>"
														+"<label for='type_degree'> &nbsp;</label>"														
													+"</div>"
												+"</div>"
											+"</div>"
												+"<div class='form-group'> "
													+"<label for='specialization'>Especialização</label>"
														+"<select atuacao-number='{atuacao-number}' redo-feedback='1' type-selection = 'select' type-feedback = 'specialization-area' multiple class='specialization specialization-class feedback' multiple='multiple' style='width:100%'>"
														+"</select>"
											+"</div>"
										+"</div>"

var templateProfessional = "<div class='form-row experiencia' id='experiencia-{id}'>"

				+"<div class='form-group col-sm-6'>"
					+"<label for='enterprise'>Empresa</label>"
					+"<input experience-number='{experience-number}' type='text' redo-feedback='1' type-selection = 'input-text' type-feedback = 'enterprise' class='form-control feedback enterprise' id='enterprise'>"								  	
				+"</div>"
				+"<div class='form-group col-sm-6'>"
					+"<label for='position'>Cargo</label>"
					+"<input experience-number='{experience-number}' type='text' redo-feedback='1' type-selection = 'input-text' type-feedback = 'position' class='form-control feedback position' id='enterprise'>"							  	
				+"</div>"
				+"<div class='form-group col-sm-12'>"
					+"<label for='position'>Atribuições e Tarefas</label>"
					+"<textarea experience-number='{experience-number}' class='form-control'>"
						
					+"</textarea>"							  	
				+"</div>"
				+"<div class='form-group col-sm-3'>"
					+"<label for='begin-enterprise-date'>Data de Início</label>"
					+"<input type='text' redo-feedback='1' type-selection = 'input-text' type-feedback = 'enterprise-date-begin' class='date-class form-control date-class feedback' id='begin-enterprise-date'>"							  	
				+"</div>"
				+"<div class='form-group col-sm-3'>"
					+"<label for='final-enterprise-date'>Data de Fim</label>"
					+"<input type='text' redo-feedback='1' type-selection = 'input-text' type-feedback = 'enterprise-date-begin' class=' date-class form-control mb-10 feedback date-class' id='final-enterprise-date'>"	
					+"<label class='radio-inline'>"
    				+"<input type='checkbox' name='inlineRadioOptionsWeek' id='Checkbox3' value='3'>&nbsp;Emprego Atual</label>"							  	
				+"</div>"
				+"<div class='form-group col-sm-1'>"
					+"<label for='enterprise-trash'> &nbsp;</label>"
					+"<i id='enterprise-trash' data-target='#professional-info' class='form-control far fa-trash-alt trash-e trash-feedback'></i>"
				+"</div>"	
		+"</div>"
$(document).ready(function () { 
	$('#modalformacao').on('show.bs.modal', function (event) {
			if($(".formacao").length<=1){
				$('#modalformacao').modal('hide'); 
				return;
			}
			$("#modal-body-formacao").html("");
			var degrees = {}
			$("#form-step2").find(".degree").each(function(index){			
				degrees[$(this).attr("formacao-number")] = $(this).find("option:selected").val();
			});
			var type_degrees = {};
			$("#form-step2").find(".type-degree").each(function(index){		
				type_degrees[$(this).attr("formacao-number")] = $(this).find("option:selected").val();				
			});
			for(key in degrees){
				$div = $("<div>").addClass("list-delete-formacao");
				$divspan1 = $("<div>").css("display","inline").addClass("my-auto")
				$divspan2 = $("<div>").css("display","inline").addClass("my-auto")
				$divtrash = $("<div>").css("display","inline").addClass("float-right")
				$("<span>").addClass("list-delete-formacao").html(type_degrees[key]).appendTo($divspan1);
				$("<span>").addClass("list-delete-formacao").html(degrees[key]).appendTo($divspan2);
				
				$trash = $("<i>").addClass("fa fa-trash my-auto trash-formacao").attr("aria-hidden",true).attr("data-target","#formacao-"+key);
				
				$trash[0].onclick = function(event){
					var count_formacao = $(".formacao").length;
					if(count_formacao>1){
						$($(this).attr("data-target")).remove();
						$(this).parent().parent().remove();
						$('#modalformacao').modal('toggle'); 
						if(count_formacao-1<=1){
							$(".exclude-formacao").attr('hidden',true).hide();
						}
					}else{
						$(".exclude-formacao").attr('hidden',true).hide();
					}
					
				};
				$trash.appendTo($divtrash)
				$divspan1.appendTo($div)
				$divspan2.appendTo($div)
				$divtrash.appendTo($div)				
				$div.appendTo($("#modal-body-formacao"));
			}
			
			
			
	});

	$('#modalatuacao').on('show.bs.modal', function (event) {
			if($(".atuacao").length<=1){
				$('#modalatuacao').modal('hide'); 
				return;
			}
			$("#modal-body-atuacao").html("");
			
			var ocupations = {}
			$("#form-step3").find(".occupation-area").each(function(index){			
				ocupations[$(this).attr("atuacao-number")] = $(this).find("option:selected").val();
			});
			
			for(key in ocupations){
				$div = $("<div>").addClass("list-delete-atuacao");
				$divspan1 = $("<div>").css("display","inline").addClass("my-auto")
				$divtrash = $("<div>").css("display","inline").addClass("float-right")
				$("<span>").addClass("list-delete-atuacao").html(ocupations[key]).appendTo($divspan1);
				
				
				$trash = $("<i>").addClass("fa fa-trash my-auto trash-atuacao").attr("aria-hidden",true).attr("data-target","#atuacao-"+key);
				
				$trash[0].onclick = function(event){
					var count_atuacao = $(".atuacao").length;
					if(count_atuacao>1){
						$($(this).attr("data-target")).remove();
						$(this).parent().parent().remove();
						$('#modalatuacao').modal('toggle'); 
						if(count_atuacao-1<=1){
							$(".exclude-occupation-area").attr('hidden',true).hide();
						}
					}else{		
						$('#modalatuacao').modal('toggle'); 
						$(".exclude-occupation-area").attr('hidden').hide();
					}
					
				};
				$trash.appendTo($divtrash)
				$divspan1.appendTo($div)
				$divtrash.appendTo($div)
				
				$div.appendTo($("#modal-body-atuacao"));
			}
			
			
			
	});	
	
	$('#modalexperiencia').on('show.bs.modal', function (event) {
			
			if($(".experiencia").length<=1){
				
				$('#modalexperiencia').modal('hide');  
				return;
			}
			$("#modal-body-experiencia").html("");
			
			var ocupations = {}
			$("#form-step4").find(".enterprise").each(function(index){
				
				ocupations[$(this).attr("experience-number")] = $(this).val();
			});
			
			for(key in ocupations){
				$div = $("<div>").addClass("list-delete-experiencia");
				$divspan1 = $("<div>").css("display","inline").addClass("my-auto")
				$divtrash = $("<div>").css("display","inline").addClass("float-right")
				$("<span>").addClass("list-delete-experiencia").html(ocupations[key]).appendTo($divspan1);
				
				
				$trash = $("<i>").addClass("fa fa-trash my-auto trash-experiencia").attr("aria-hidden",true).attr("data-target","#experiencia-"+key);
				
				$trash[0].onclick = function(event){
					var count_experiencia = $(".experiencia").length;
					if(count_experiencia>1){
						$($(this).attr("data-target")).remove();
						$(this).parent().parent().remove();
						$('#modalexperiencia').modal('toggle'); 
						if(count_experiencia-1<=1){
							$(".exclude-professional").attr('hidden',true).hide();
						}
					}else{		
						$('#modalexperiencia').modal('toggle'); 
						$(".exclude-professional").attr('hidden').hide();
					}
					
				};
				$trash.appendTo($divtrash)
				$divspan1.appendTo($div)
				$divtrash.appendTo($div)
				
				$div.appendTo($("#modal-body-experiencia"));
			}
			
			
			
	});	



	$(".date-class").mask("99/99/9999")
	$(".tel-class").mask("(99)99999999?9");
	$(".cep").mask("99999-999");
      
	
	$(".specialization-class").select2(
		{
		  placeholder: "Selecione uma Especialização",
		  maximumSelectionLength: 3,
		  data:[{id:0,text:'enhancement'},{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}]
		}
	);
    $(".next-step-cadastro").on("click", function (evt) {
		actual_step = actual_step+1;
		var step = $(this).attr("data-step")
		if(step == "1"){
			if(!testEmail()){
				$("#email").focus();
				$("#error-email").removeAttr("hidden");
				return false;
			}else{
				$("#error-email").attr("hidden",true);
			}
			//if(testBirthDate()){

			//}
			$("#form-step1").hide();
			$("#form-step2").removeAttr('hidden').show();			
			$("#breadcumb-1-step").removeClass("active").addClass("completed");
			$("#breadcumb-2-step").addClass("active");

		}
		if(step == "2"){
			$("#form-step2").hide();
			$("#form-step3").removeAttr('hidden').show();
			$("#breadcumb-2-step").removeClass("active").addClass("completed");
			$("#breadcumb-3-step").addClass("active");
		}
		if(step == "3"){
			$("#form-step3").hide();
			$("#form-step4").removeAttr('hidden').show();
			$("#breadcumb-3-step").removeClass("active").addClass("completed");
			$("#breadcumb-4-step").addClass("active");
		}
        
    });
	$(".back-step-cadastro").on("click", function (evt) {
		actual_step = actual_step-1;
		var step = $(this).attr("data-step")
		if(step == "2"){
			$("#form-step1").removeAttr('hidden').show();				
			$("#form-step2").hide();	
			$("#breadcumb-second-step").removeClass("active");
			$("#breadcumb-first-step").removeClass("completed").addClass("active");			
		}
		if(step == "3"){
			$("#form-step2").removeAttr('hidden').show();
			$("#form-step3").hide();
			$("#breadcumb-third-step").removeClass("active");
			$("#breadcumb-second-step").removeClass("completed").addClass("active");	
		}
		if(step == "4"){
			$("#form-step3").removeAttr('hidden').show();
			$("#form-step4").hide();
			$("#breadcumb-fourth-step").removeClass("active");
			$("#breadcumb-third-step").removeClass("completed").addClass("active");	
		}
        
    });
	$(".add-formacao").on("click", function (evt) {
		number_formacao+=1;		
		formacao = templateFormacao.replace("{id}",number_formacao).replace("{formacao-number}",number_formacao);		
		$(formacao).insertBefore($(".add-formacao"));
		$("#formacao-"+number_formacao).find(".feedback").each(function(index){
			var type_feedback = $(this).attr("type-feedback");
			$(this)[0].onchange =  function(){ 
				removeLastFeedback();			
				var value = $(this).find("option:selected").text();	
				feedback(type_feedback,value);
				addClassLastFeedback();
				//giveFeedback("Feedback" + $(this).attr("type-feedback"));
			};
				
		});
		$("#formacao-"+number_formacao).find(".school").each(function(index){
			$(this).attr("formacao-number",$(this).attr("formacao-number").replace("{formacao-number}",number_formacao));				
		});
		$("#formacao-"+number_formacao).find(".degree").each(function(index){			
			$(this).attr("formacao-number",$(this).attr("formacao-number").replace("{formacao-number}",number_formacao));				
		});
		$("#formacao-"+number_formacao).find(".type-degree").each(function(index){
			$(this).attr("formacao-number",$(this).attr("formacao-number").replace("{formacao-number}",number_formacao));				
		});
		
		if($(".formacao").length>=1){
			$(".exclude-formacao").removeAttr('hidden').show();
		}
    });
	$(".add-occupation-area").on("click", function (evt) {
		
		number_specialization+=1;
		var content = templateOccupationSpecialization.replace("{id}",number_specialization)
		var $element = $(content).insertBefore($(".add-occupation-area"));
		$element.find(".specialization-class").select2(
		{
		  placeholder: "Selecione uma Especialização",
		  maximumSelectionLength: 3,
		  data:[{id:0,text:'enhancement'},{id:1,text:'bug'},{id:2,text:'duplicate'},{id:3,text:'invalid'},{id:4,text:'wontfix'}]
		}
		);
		
		$("#atuacao-"+number_specialization).find(".feedback").each(function(index){
			var type_feedback = $(this).attr("type-feedback");
			$(this)[0].onchange =  function(){ 
				removeLastFeedback();			
				var value = $(this).find("option:selected").text();	
				feedback(type_feedback,value);
				addClassLastFeedback();
				//giveFeedback("Feedback" + $(this).attr("type-feedback"));
			}; 			
		});
		$("#atuacao"+number_specialization).find(".remove-occupation-area").each(function(index){
			var type_feedback = $(this).attr("type-feedback");
			$(this).attr("data-target","#occupation-specialization"+number_specialization);
			$(this)[0].onclick =  function(){ 
				$($(this).attr("data-target")).remove();
				
			}; 			
		});
		$("#atuacao-"+number_specialization).find(".occupation-area").each(function(index){
			
			$(this).attr("atuacao-number",$(this).attr("atuacao-number").replace("{atuacao-number}",number_specialization));				
		});
		$("#atuacao-"+number_specialization).find(".specialization").each(function(index){
						
			$(this).attr("atuacao-number",$(this).attr("atuacao-number").replace("{atuacao-number}",number_specialization));				
		});
		if($(".atuacao").length>=1){
			$(".exclude-occupation-area").removeAttr('hidden').show();
		}
		
       
    });
	
	$(".feedback").on("change", function (evt) {

		var type_feedback = $(this).attr("type-feedback");
		var type_selection = $(this).attr("type-selection");
		var value = "";
		switch(type_selection){
			case "input-text":
				value = $(this).val();
				break;
			case "select":
				value = $(this).find("option:selected").text();
				break;
			default:
				value = "";
			
			
		}
		removeLastFeedback();
		feedback(type_feedback, value);
        addClassLastFeedback();
    });
	
	$("#cep").on("change", function (evt) {
		pesquisacep($(this).val());
	});
    $(".add-professional").on("click", function (evt) {
		number_professional+=1;
		var content = templateProfessional.replace("{id}",number_professional)
		var $element = $(content).insertBefore($(".add-professional"));
		$("#experiencia-"+number_professional).find(".feedback").each(function(index){
			var type_feedback = $(this).attr("type-feedback");
			$(this)[0].onchange =  function(){ 
				removeLastFeedback();			
				var value = $(this).find("option:selected").text();	
				feedback(type_feedback,value);
				addClassLastFeedback();
				//giveFeedback("Feedback" + $(this).attr("type-feedback"));
			}; 			
		});
		$("#experiencia-"+number_professional).find(".trash-feedback").each(function(index){
			$(this).removeAttr("hidden").show();
			$(this).attr("data-target","#experiencia"+number_professional);
			$(this)[0].onclick =  function(){ 
				$($(this).attr("data-target")).remove();
			}; 				
		});	
		$("#experiencia-"+number_professional).find(".enterprise").each(function(index){
			
			$(this).attr("experience-number",$(this).attr("experience-number").replace("{experience-number}",number_professional));				
		});
		$("#experiencia-"+number_professional).find(".position").each(function(index){			
			
			$(this).attr("experience-number",$(this).attr("experience-number").replace("{experience-number}",number_professional));				
		});	
		if($(".experiencia").length>=1){
			$(".exclude-professional").removeAttr('hidden').show();
		}	
    });

	function addClassLastFeedback(){
		//$("#feedback-box-"+number_feedback).addClass("last-feedback").removeClass("feedback-generic");;
	}
	function removeLastFeedback(){
		//$(".feedback-box").addClass("feedback-generic").removeClass("last-feedback");
	}
	
	
	function giveFeedback(text){
		number_feedback+=1;
		var feedback = getFeedback(text);
		html = $("#feedback-area").html();
		$("#feedback-area").html(feedback+html);
		
	}
	
	function testEmail(){
		var email = $("#email").val();
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(String(email).toLowerCase());
	}
	
	function getFeedback(text){
		var class_feedback = "bg-green";
		if(actual_step == 1){
			class_feedback = "bg-green" 
		}
		else if (actual_step == 2){
			class_feedback = "bg-blue" 
		}
		else if (actual_step == 3){
			class_feedback = "bg-red" 
		}
		else if (actual_step == 4){
			class_feedback = "bg-violet" 
		}
		return templateFeedback.replace("${feedback}",text).replace("${type-feedback}","Teste").replace("${id}",number_feedback).replace("${class-feedback}",class_feedback);			
	}
	function feedback(type, value){
		giveFeedback(type+"-"+value);
	}
	
	
	 function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            $("#address").val("");
			$("#neighborhood").val("");
			$("#city").val("");
			$("#state").val("");
    };

    
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
				$("#address").val("...")
				$("#neighborhood").val("...");
				$("#state").val("...");
				$("#city").val("...");   
               

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
	
	$("#LinkViewResumeFeedback").on("click", function (evt) {
		HideAllViews();
		$("#ViewResumeFeedback").removeAttr("hidden").show();
	});
	$("#LinkViewEditUserData").on("click", function (evt) {
		HideAllViews();
		$("#ViewEditUserData").removeAttr("hidden").show();
	});
	function HideAllViews(){
		$("#ViewResumeFeedback").attr("hidden",true).hide();
		$("#ViewEditUserData").attr("hidden",true).hide();
	}
	
});
function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            $("#address").val((conteudo.logradouro));
			$("#neighborhood").val((conteudo.bairro));
			$("#state").val((conteudo.localidade));
			$("#city").val((conteudo.uf));         
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    };
	

