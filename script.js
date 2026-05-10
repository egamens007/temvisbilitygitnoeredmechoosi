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

  // COLOR SEGÚN SEVERIDAD

  let color = "#16a34a";

  if (severidad.toLowerCase().includes("alto")) {
    color = "#dc2626";
  }

  if (severidad.toLowerCase().includes("crítico")) {
    color = "#991b1b";
  }

  if (severidad.toLowerCase().includes("medio")) {
    color = "#d97706";
  }

  // HTML FINAL

  let html = `
<style>

.cti-container{
  max-width:1200px;
  margin:40px auto;
  padding:15px;
  font-family:Arial,sans-serif;
  color:#0f172a;
  line-height:1.8;
}

.cti-grid{
  display:grid;
  grid-template-columns:2fr 360px;
  gap:35px;
  align-items:start;
}

.cti-main h2,
.cti-sidebar h3{
  word-wrap:break-word;
  overflow-wrap:break-word;
}

.cti-main p,
.cti-main li{
  word-wrap:break-word;
  overflow-wrap:break-word;
}

.cti-sidebar{
  background:#fff;
  border:1px solid #e2e8f0;
  box-shadow:0 10px 30px rgba(15,23,42,0.10);
  padding:25px;
  border-radius:4px;
}

/* RESPONSIVE */

@media(max-width:900px){

  .cti-grid{
    grid-template-columns:1fr;
  }

  .cti-sidebar{
    width:100%;
    padding:20px;
    box-sizing:border-box;
  }

  .cti-main h2{
    font-size:24px !important;
  }

}

</style>

<div class="cti-container">

  <div class="cti-grid">

    <!-- CONTENIDO PRINCIPAL -->

    <main class="cti-main">

      <p style="
        font-size:13px;
        font-weight:700;
        color:#334155;
        margin-bottom:20px;
        letter-spacing:1px;
      ">
        ALERTA / CVE / CSIRT
      </p>

      <h2 style="
        font-size:28px;
        margin-top:30px;
        color:#020617;
      ">
        Síntesis
      </h2>

      <p style="text-align:justify;">
        ${desc}
      </p>

      <p style="text-align:justify;">
        La vulnerabilidad podría permitir a un atacante remoto comprometer la integridad del sistema afectado, ejecutar acciones no autorizadas o afectar la disponibilidad de los servicios vulnerables.
      </p>

      <p style="text-align:justify;">
        Se recomienda aplicar las actualizaciones de seguridad proporcionadas por el fabricante lo antes posible y monitorear posibles intentos de explotación relacionados con ${cve}.
      </p>

      <h2 style="
        font-size:28px;
        margin-top:30px;
        color:#020617;
      ">
        Tipología
      </h2>

      <ul>
        <li>${severidad}</li>
        <li>Vulnerabilidad de seguridad</li>
      </ul>

      <h2 style="
        font-size:28px;
        margin-top:30px;
        color:#020617;
      ">
        Productos y versiones afectadas
      </h2>

      <p>
        <strong>${producto}</strong>
      </p>

      <ul>
        <li>${versiones}</li>
      </ul>

      <h2 style="
        font-size:28px;
        margin-top:35px;
        color:#020617;
      ">
        Recomendaciones
      </h2>

      <ul>
        <li>Actualizar inmediatamente el producto afectado a la versión corregida.</li>
        <li>Revisar registros y actividad sospechosa relacionada.</li>
        <li>Aplicar medidas compensatorias si no es posible actualizar inmediatamente.</li>
        <li>Restringir exposición innecesaria de servicios vulnerables.</li>
        <li>Monitorear indicadores de explotación asociados a ${cve}.</li>
        <li>Validar configuraciones de seguridad y controles de acceso.</li>
      </ul>

    </main>

    <!-- PANEL DERECHO -->

    <aside class="cti-sidebar">

      <h3 style="
        font-size:20px;
        margin-top:0;
        color:#020617;
        border-bottom:1px solid #cbd5e1;
        padding-bottom:12px;
      ">
        Impacto sistémico
      </h3>

      <p style="
        font-size:16px;
        margin:15px 0;
        line-height:1.8;
      ">

        <span style="
          color:${color};
          font-weight:700;
        ">
          ● ${severidad}
        </span>

        <span style="color:#64748b;">
          (${cvss})
        </span>

        <br>

        <a href="${link}"
           target="_blank"
           style="
             color:#005bd3;
             font-weight:700;
             text-decoration:none;
             word-break:break-word;
           ">

           ${cve}

        </a>

      </p>

      <h3 style="
        font-size:20px;
        margin-top:30px;
        color:#020617;
        border-bottom:1px solid #cbd5e1;
        padding-bottom:12px;
      ">
        Argumentos
      </h3>

      <div style="
        display:flex;
        gap:8px;
        flex-wrap:wrap;
        margin:15px 0;
      ">

        <span style="
          border:1px solid #0066cc;
          color:#0066cc;
          border-radius:20px;
          padding:6px 14px;
          font-size:14px;
        ">
          ${producto}
        </span>

        <span style="
          border:1px solid #0066cc;
          color:#0066cc;
          border-radius:20px;
          padding:6px 14px;
          font-size:14px;
        ">
          ${cve}
        </span>

        <span style="
          border:1px solid #0066cc;
          color:#0066cc;
          border-radius:20px;
          padding:6px 14px;
          font-size:14px;
        ">
          CVSS ${cvss}
        </span>

      </div>

      <h3 style="
        font-size:20px;
        margin-top:30px;
        color:#020617;
        border-bottom:1px solid #cbd5e1;
        padding-bottom:12px;
      ">
        Estado
      </h3>

      <p>
        ✅ Actualización disponible
      </p>

    </aside>

  </div>

</div>
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
    .split(/\n|,|;/)
    .map(ioc => ioc.trim())
    .filter(ioc => ioc !== "");

  // Eliminar duplicados
  iocs = [...new Set(iocs)];

  let categorias = {
    urls: [],
    ips: [],
    dominios: [],
    md5: [],
    sha1: [],
    sha256: [],
    otros: []
  };

  iocs.forEach(ioc => {

    let limpio = ioc.replace(/\[.\]/g, ".").replace("hxxp", "http");

    if (/^https?:\/\/[^\s]+$/i.test(limpio)) {
      categorias.urls.push(ioc);
    }

    else if (/^(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\.(25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})){3}$/.test(limpio)) {
      categorias.ips.push(ioc);
    }

    else if (/^[a-fA-F0-9]{32}$/.test(limpio)) {
      categorias.md5.push(ioc);
    }

    else if (/^[a-fA-F0-9]{40}$/.test(limpio)) {
      categorias.sha1.push(ioc);
    }

    else if (/^[a-fA-F0-9]{64}$/.test(limpio)) {
      categorias.sha256.push(ioc);
    }

    else if (/^([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/.test(limpio)) {
      categorias.dominios.push(ioc);
    }

    else {
      categorias.otros.push(ioc);
    }

  });

  function crearBloque(titulo, items) {
    if (items.length === 0) return "";

    return `
<h4>${titulo}</h4>
<ul>
${items.map(item => `<li><code>${item}</code></li>`).join("\n")}
</ul>
`;
  }

  let html = `
<div style="margin:20px 0;color:#cdd9e5;font-size:14px;line-height:1.6;">
<strong>Tipo:</strong> Indicadores de Compromiso (IOC)<br>
<strong>Fuente:</strong> ${fuente}<br>
<strong>Fecha:</strong> ${fecha}<br>
<strong>Total de IOC:</strong> ${iocs.length}
</div>

<h3>🌐 ${titulo}</h3>

<p>
Se comparte el siguiente conjunto de indicadores de compromiso asociados a actividad sospechosa, campaña maliciosa o infraestructura observada.
Estos indicadores pueden utilizarse para monitoreo, búsqueda retroactiva, bloqueo preventivo y fortalecimiento de controles de seguridad.
</p>

<h3>📌 Indicadores de Compromiso Clasificados</h3>

${crearBloque("🌐 URLs", categorias.urls)}
${crearBloque("🧭 Direcciones IP", categorias.ips)}
${crearBloque("🌍 Dominios", categorias.dominios)}
${crearBloque("🔑 Hashes MD5", categorias.md5)}
${crearBloque("🔑 Hashes SHA1", categorias.sha1)}
${crearBloque("🔑 Hashes SHA256", categorias.sha256)}
${crearBloque("📎 Otros indicadores", categorias.otros)}

<h3>🛡️ Recomendaciones</h3>

<ul>
<li>Bloquear los indicadores en firewall, proxy, EDR, SIEM o DNS filtering según corresponda.</li>
<li>Realizar búsqueda retroactiva en logs internos para identificar posibles conexiones previas.</li>
<li>Verificar conexiones salientes hacia IPs, dominios o URLs sospechosas.</li>
<li>No ejecutar archivos asociados sin análisis previo en un entorno controlado.</li>
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
