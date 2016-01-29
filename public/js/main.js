$(document).ready(function() {
	var currFolder = "Diaphorina_citri" /*""*/;
	var currIndex = 0;
	var folderNames = ["Diaphorina_citri","Anoplophora_glabripennis","Aedes_albopictus","Halyomorpha_halys","Cactoblastis_cactorum","Scirtothrips_dorsalis","Anoplophora_chinensis","Tomicus_piniperda","Agrilus_planipennis","Lymantria_dispar","Ips_typographus","Coptotermes_formosanus","Lissachatina_fulica","Homalodisca_vitripennis","Adelges_tsugae","Epiphyas_postvittana","Ceratitis_capitata","Anastrepha_ludens","Pectinophora_gossypiella","Maconellicoccus_hirsutus","Solenopsis_invicta","Diuraphis_noxia","Bemisia_argentifolii","Heterodera_glycines","Alosa_pseudoharengus","Asian_carp","Corbicula_fluminea","Hemigrapsus_sanguineus","Monopterus_albus","Eriocheir_sinensis","Styela_clava","Gymnocephalus_cernuus","Carcinus_maenas","Pterois_volitans","Channa_argus","Potamopyrgus_antipodarum","Myocastor_coypus","Dreissena_bugensis","Neogobius_melanostomus","Orconectes_rusticus","Petromyzon_marinus","Didemnum_vexillum","Bythotrephes_longimanus","Rapana_venosa","Phyllorhiza_punctata","Dreissena_polymorpha","Dioscorea_bulbifera","Elaeagnus_umbellata","Vitex_rotundifolia","Schinus_terebinthifolius","Cirsium_arvense","Triadica_sebifera","Imperata_cylindrica","Rhamnus_cathartica","Dipsacus_fullonum","Linaria_dalmatica","Centaurea_diffusa","Bromus_tectorum","Ficaria_verna","Alliaria_petiolata","Heracleum_mantegazzianum","Lepidium_appelianum","Cynoglossum_officinale","Lygodium_japonicum","Lonicera_japonica","Fallopia_japonica","Spiraea_japonica","Microstegium_vimineum","Sorghum_halepense","Pueraria_montana_var._lobata","Euphorbia_esula","Taeniatherum_caput-medusae","Persicaria_perfoliata","Rosa_multiflora","Carduus_nutans","Lygodium_microphyllum","Paulownia_tomentosa","Centaurea_calcitrapa","Rhaponticum_repens","Elaeagnus_angustifolia","Tamarix_spp","Hypericum_perforatum","Cytisus_scoparius","Onopordum_acanthium","Centaurea_stoebe","Ailanthus_altissima","Solanum_viarum","Lepidium_draba","Striga_asiatica","Centaurea_solstitialis","Linaria_vulgaris","Alternanthera_philoxeroides","Egeria_densa","Caulerpa_taxifolia","Phragmites_australis","Potamogeton_crispus","Didymosphenia_geminata","Myriophyllum_spicatum","Arundo_donax","Salvinia_molesta","Hydrilla_verticillata","Melaleuca_quinquenervia","Lythrum_salicaria","Eichhornia_crassipes","Pistia_stratiotes","Ipomoea_aquatica","Ophiostoma","Sirococcus_clavigignenti-juglandacearum","Ceratocystis_fagacearum","Pseudogymnoascus_destructans","Orbivirus","Flavivirus","H5N5"];
	var getNewImg = function() {
		var tempIndex = Math.floor(Math.random()*113);
		//currFolder = folderNames[tempIndex];
		currIndex = Math.floor(Math.random()*10);
		$("#image-container > img").attr('src','/static/imgs/'+currFolder+'/'+currIndex+'.jpg');
	}
	getNewImg();
	var result = $("#result");
	var validate = function() {
		if($(".form-control").val().trim().replace(" ","_").toLowerCase()===/*"regina is difficult"*/currFolder.toLowerCase()) {
			result.text("Correct!");
			result.removeClass("alert-danger").addClass("alert-success");
			console.log("correct");
			getNewImg();
		}
		else {
			result.text("You are wrong!");
			result.addClass("alert-danger").removeClass("alert-success");
			console.log("incorrect");
		}
	};
	var showAns = function() {
		$("#answer").text("Correct answer: "+currFolder.replace("_"," "));
	}
	$("#submit").click(validate);
	$("#show-ans").click( function() {
		$("#answer").toggle();
		showAns();
	});
	$(".form-control").keypress(function (e) {
		console.log(e);
		var key = e.which;
		if (key==13){
			validate();
		}
	});
});
