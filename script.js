function mostrarTab(tab) {

  document.querySelectorAll(".tab-content")
    .forEach(el => el.classList.remove("active"));

  if (tab === "actor") {
    document.getElementById("actorTab").classList.add("active");
  } else {
    document.getElementById(tab).classList.add("active");
  }
}

function generarLeak() {

  let actor =
    document.getElementById("actor").value;

  let grupo =
    document.getElementById("grupo").value;

  let objetivo =
    document.getElementById("objetivo").value;

  let pais =
    document.getElementById("pais").value;

  let volumen =
    document.getElementById("volumen").value;

  let tipo =
    document.getElementById("tipo").value;

  let descripcion =
    document.getElementById("descripcion").value;

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Threat Actor:</strong> ${actor}<br>
<strong>Grupo:</strong> ${grupo}<br>
<strong>Objetivo:</strong> ${objetivo}<br>
<strong>País:</strong> ${pais}<br>
<strong>Volumen:</strong> ${volumen}
</div>

<h3>🧾 Resumen Ejecutivo</h3>

<p>
${descripcion}
</p>

<h3>🔍 Detalles Técnicos</h3>

<ul>
<li><strong>Tipo:</strong> ${tipo}</li>
<li><strong>Volumen:</strong> ${volumen}</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function generarCVE() {

  let producto =
    document.getElementById("producto").value;

  let cve =
    document.getElementById("cveid").value;

  let severidad =
    document.getElementById("severidad").value;

  let cvss =
    document.getElementById("cvss").value;

  let versiones =
    document.getElementById("versiones").value;

  let link =
    document.getElementById("link").value;

  let desc =
    document.getElementById("cvedesc").value;

  let html = `
<h3>🚨 ${cve}</h3>

<p>
${desc}
</p>

<ul>
<li><strong>Producto:</strong> ${producto}</li>
<li><strong>Severidad:</strong> ${severidad}</li>
<li><strong>CVSS:</strong> ${cvss}</li>
<li><strong>Versiones:</strong> ${versiones}</li>
<li><strong>Referencia:</strong>
<a href="${link}" target="_blank">
Ver advisory
</a>
</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function generarActor() {

  let actor =
    document.getElementById("actorname").value;

  let motivacion =
    document.getElementById("motivacion").value;

  let sector =
    document.getElementById("sector").value;

  let origen =
    document.getElementById("origen").value;

  let desc =
    document.getElementById("actordesc").value;

  let html = `
<h3>👤 Threat Actor: ${actor}</h3>

<p>
${desc}
</p>

<ul>
<li><strong>Motivación:</strong> ${motivacion}</li>
<li><strong>Sectores afectados:</strong> ${sector}</li>
<li><strong>Origen:</strong> ${origen}</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function copiarHTML() {

  let texto =
    document.getElementById("resultado");

  texto.select();

  document.execCommand("copy");

  alert("HTML copiado");
}
function generarIOC() {

  let titulo = document.getElementById("iocTitulo").value;
  let fuente = document.getElementById("iocFuente").value;
  let fecha = document.getElementById("iocFecha").value;
  let lista = document.getElementById("iocLista").value;

  let iocs = lista
    .split("\n")
    .map(ioc => ioc.trim())
    .filter(ioc => ioc !== "");

  let items = iocs
    .map(ioc => `<li><code>${ioc}</code></li>`)
    .join("\n");

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Tipo:</strong> Indicadores de Compromiso (IOC)<br>
<strong>Fuente:</strong> ${fuente}<br>
<strong>Fecha:</strong> ${fecha}
</div>

<h3>🌐 ${titulo}</h3>

<p>
Se comparte el siguiente conjunto de indicadores de compromiso asociados a una actividad sospechosa, campaña maliciosa o infraestructura observada. 
Estos IOCs pueden ser utilizados para labores de monitoreo, búsqueda retroactiva, bloqueo preventivo y fortalecimiento de controles de seguridad.
</p>

<h3>📌 Indicadores de Compromiso</h3>

<ul>
${items}
</ul>

<h3>🛡️ Recomendaciones</h3>

<ul>
<li>Bloquear los indicadores en firewall, proxy, EDR o SIEM según corresponda.</li>
<li>Realizar búsqueda retroactiva en logs internos.</li>
<li>Verificar conexiones salientes hacia dominios, IPs o URLs sospechosas.</li>
<li>No ejecutar archivos asociados sin análisis previo en entorno controlado.</li>
<li>Monitorear posibles variantes o infraestructura relacionada.</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function generarMalware() {

  let nombre = document.getElementById("malwareNombre").value;
  let tipo = document.getElementById("malwareTipo").value;
  let vector = document.getElementById("malwareVector").value;
  let c2 = document.getElementById("malwareC2").value;
  let impacto = document.getElementById("malwareImpacto").value;
  let descripcion = document.getElementById("malwareDescripcion").value;

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Malware:</strong> ${nombre}<br>
<strong>Tipo:</strong> ${tipo}<br>
<strong>Vector:</strong> ${vector}<br>
<strong>C2 / Infraestructura:</strong> ${c2}
</div>

<h3>☣️ Resumen Ejecutivo</h3>

<p>
${descripcion}
</p>

<h3>🔍 Detalles Técnicos</h3>

<ul>
<li><strong>Familia / Nombre:</strong> ${nombre}</li>
<li><strong>Tipo:</strong> ${tipo}</li>
<li><strong>Vector de infección:</strong> ${vector}</li>
<li><strong>Infraestructura C2:</strong> ${c2}</li>
<li><strong>Impacto principal:</strong> ${impacto}</li>
</ul>

<h3>⚠️ Impacto y Riesgo</h3>

<p>
La presencia de este malware puede representar un riesgo significativo para la confidencialidad, integridad y disponibilidad de los sistemas afectados.
</p>

<h3>🛡️ Recomendaciones</h3>

<ul>
<li>Aislar equipos sospechosos de infección.</li>
<li>Ejecutar análisis con EDR/antimalware actualizado.</li>
<li>Revisar persistencia, tareas programadas y conexiones salientes.</li>
<li>Bloquear infraestructura C2 identificada.</li>
<li>Restablecer credenciales potencialmente comprometidas.</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function generarCampaign() {

  let nombre = document.getElementById("campaignNombre").value;
  let objetivo = document.getElementById("campaignObjetivo").value;
  let pais = document.getElementById("campaignPais").value;
  let vector = document.getElementById("campaignVector").value;
  let impacto = document.getElementById("campaignImpacto").value;
  let descripcion = document.getElementById("campaignDescripcion").value;

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Campaña:</strong> ${nombre}<br>
<strong>Objetivo:</strong> ${objetivo}<br>
<strong>Región:</strong> ${pais}<br>
<strong>Vector:</strong> ${vector}
</div>

<h3>🎯 Resumen Ejecutivo</h3>

<p>
${descripcion}
</p>

<h3>🔍 Detalles de la Campaña</h3>

<ul>
<li><strong>Nombre:</strong> ${nombre}</li>
<li><strong>Objetivo / sector:</strong> ${objetivo}</li>
<li><strong>País / región:</strong> ${pais}</li>
<li><strong>Vector de ataque:</strong> ${vector}</li>
<li><strong>Impacto principal:</strong> ${impacto}</li>
</ul>

<h3>⚠️ Impacto y Riesgo</h3>

<p>
Esta campaña puede afectar a usuarios e instituciones mediante técnicas de ingeniería social, robo de credenciales, distribución de malware o fraude digital.
</p>

<h3>🛡️ Recomendaciones</h3>

<ul>
<li>Capacitar usuarios para identificar correos, mensajes o sitios falsos.</li>
<li>Bloquear dominios, URLs e IPs relacionadas con la campaña.</li>
<li>Implementar MFA en cuentas críticas.</li>
<li>Monitorear intentos de acceso anómalos.</li>
<li>Reportar dominios maliciosos a proveedores y autoridades correspondientes.</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}

function generarRansomware() {

  let grupo = document.getElementById("ransomGrupo").value;
  let victima = document.getElementById("ransomVictima").value;
  let pais = document.getElementById("ransomPais").value;
  let sector = document.getElementById("ransomSector").value;
  let volumen = document.getElementById("ransomVolumen").value;
  let fecha = document.getElementById("ransomFecha").value;
  let descripcion = document.getElementById("ransomDescripcion").value;

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Grupo:</strong> ${grupo}<br>
<strong>Víctima:</strong> ${victima}<br>
<strong>País:</strong> ${pais}<br>
<strong>Sector:</strong> ${sector}<br>
<strong>Fecha:</strong> ${fecha}
</div>

<h3>🔐 Resumen Ejecutivo</h3>

<p>
${descripcion}
</p>

<h3>📂 Datos Comprometidos</h3>

<ul>
<li><strong>Organización afectada:</strong> ${victima}</li>
<li><strong>Sector:</strong> ${sector}</li>
<li><strong>Volumen declarado:</strong> ${volumen}</li>
<li><strong>Grupo atribuido:</strong> ${grupo}</li>
</ul>

<h3>⚠️ Impacto y Riesgo</h3>

<p>
El incidente representa un riesgo alto para la organización afectada debido a la posible exposición de información interna, datos sensibles, documentos corporativos o información de clientes.
</p>

<h3>🛡️ Recomendaciones</h3>

<h4>🏛️ Para Instituciones</h4>

<ul>
<li>Activar el plan de respuesta a incidentes.</li>
<li>Aislar sistemas comprometidos.</li>
<li>Revisar accesos remotos, VPN y credenciales privilegiadas.</li>
<li>Verificar respaldos y planes de recuperación.</li>
<li>Monitorear sitios de filtración y foros clandestinos.</li>
</ul>

<h4>👤 Para Ciudadanos / Clientes</h4>

<ul>
<li>Estar atentos a comunicaciones fraudulentas.</li>
<li>No abrir enlaces o archivos sospechosos.</li>
<li>Monitorear cuentas personales y financieras.</li>
<li>Cambiar contraseñas si se reutilizaron en servicios afectados.</li>
</ul>
`;

  document.getElementById("resultado").value = html;
}
