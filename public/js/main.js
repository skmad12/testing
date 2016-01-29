$(document).ready(function() {
	var currFolder = "";
	var currIndex = null;
	//var folderNames = [Diaphorina citri,Anoplophora glabripennis,Aedes albopictus,Halyomorpha halys,Cactoblastis cactorum,Scirtothrips dorsalis,Anoplophora chinensis,Tomicus piniperda,Agrilus planipennis,Lymantria dispar,Ips typographus,Coptotermes formosanus,Lissachatina fulica,Homalodisca vitripennis,Adelges tsugae,Epiphyas postvittana,Ceratitis capitata,Anastrepha ludens,Pectinophora gossypiella,Maconellicoccus hirsutus,Solenopsis invicta,Diuraphis noxia,Bemisia argentifolii,Heterodera glycines,Alosa pseudoharengus,Asian carp,Corbicula fluminea,Hemigrapsus sanguineus,Monopterus albus,Eriocheir sinensis,Styela clava,Gymnocephalus cernuus,Carcinus maenas,Pterois volitans,Channa argus,Potamopyrgus antipodarum,Myocastor coypus,Dreissena bugensis,Neogobius melanostomus,Orconectes rusticus,Petromyzon marinus,Didemnum vexillum,Bythotrephes longimanus,Rapana venosa,Phyllorhiza punctata,Dreissena polymorpha,Dioscorea bulbifera,Elaeagnus umbellata,Vitex rotundifolia,Schinus terebinthifolius,Cirsium arvense,Triadica sebifera,Imperata cylindrica,Rhamnus cathartica,Dipsacus fullonum,Linaria dalmatica,Centaurea diffusa,Bromus tectorum,Ficaria verna,Alliaria petiolata,Heracleum mantegazzianum,Lepidium appelianum,Cynoglossum officinale,Lygodium japonicum,Lonicera japonica,Fallopia japonica,Spiraea japonica,Microstegium vimineum,Sorghum halepense,Pueraria montana var. lobata,Euphorbia esula,Taeniatherum caput-medusae,Persicaria perfoliata,Rosa multiflora,Carduus nutans,Lygodium microphyllum,Paulownia tomentosa,Centaurea calcitrapa,Rhaponticum repens,Elaeagnus angustifolia,Tamarix spp,Hypericum perforatum,Cytisus scoparius,Onopordum acanthium,Centaurea stoebe,Ailanthus altissima,Solanum viarum,Lepidium draba,Striga asiatica,Centaurea solstitialis,Linaria vulgaris,Alternanthera philoxeroides,Egeria densa,Caulerpa taxifolia,Phragmites australis,Potamogeton crispus,Didymosphenia geminata,Myriophyllum spicatum,Arundo donax,Salvinia molesta,Hydrilla verticillata,Melaleuca quinquenervia,Lythrum salicaria,Eichhornia crassipes,Pistia stratiotes,Ipomoea aquatica,Ophiostoma,Sirococcus clavigignenti-juglandacearum,Ceratocystis fagacearum,Pseudogymnoascus destructans,Orbivirus,Flavivirus,H5N5];
	var indices = [];
	for (var i=0; i<133; i++){
		indices[i]=i;
	}

	var result = $("#result");
	var validate = function() {
		if($(".form-control").val()==="regina is difficult") {
			result.text("Correct!");
			result.removeClass("alert-danger").addClass("alert-success");
			console.log("correct");
		}
		else {
			result.text("You are wrong!");
			result.addClass("alert-danger").removeClass("alert-success");
			console.log("incorrect");
		}
	};
	$("#submit").click(validate);
	$(".form-control").keypress(function (e) {
		console.log(e);
		var key = e.which;
		if (key==13){
			validate();
		}
	});
});
// getNewImg = function() {
// 	var tempIndex = Math.floor(Math.random()*113);
// 	currFolder = folderNames[tempIndex];
// }