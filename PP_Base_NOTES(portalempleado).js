{if (subject.getProperty("unitipoemp").length==0) {return "";}
else {
	if (subject.getProperty("unitipoemp")[0] != "INT") {
		// Comprobar si tiene el rol portalinterno
		if (subject.isInRole("RL_PERFILES_NOTES_PortalInterno")) {return "";}
		else {return "portalext";}
	}
	else return "";
}}