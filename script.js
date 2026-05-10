function mostrarTab(tab) {

  document.querySelectorAll(".tab-content")
    .forEach(el => el.classList.remove("active"));

  if (tab === "actor") {
    document.getElementById("actorTab")
      .classList.add("active");
  } else {
    document.getElementById(tab)
      .classList.add("active");
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
