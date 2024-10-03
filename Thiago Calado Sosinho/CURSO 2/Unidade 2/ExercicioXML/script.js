const xmlString = /* xml */ `
<frota>
  <informacoes>
    <nomeEmpresa>Bora Bill Transportadora</nomeEmpresa>
    <sede>
      <rua>Avenida do Calabreso, 1122</rua>
      <cidade>São Paulo</cidade>
      <estado>SP</estado>
      <cep>01000-000</cep>
    </sede>
    <telefone>(11) 9876-4321</telefone>
  </informacoes>
  <veiculos>
    <veiculo>
      <modelo>Mercedes-Benz Sprinter</modelo>
      <ano>2020</ano>
      <placa>XYZ-1234</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Volkswagen Delivery</modelo>
      <ano>2018</ano>
      <placa>ABC-5678</placa>
      <disponivel>false</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Ford Cargo</modelo>
      <ano>2021</ano>
      <placa>DEF-9101</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Fiat Ducato</modelo>
      <ano>2019</ano>
      <placa>GHI-2345</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Iveco Daily</modelo>
      <ano>2022</ano>
      <placa>JKL-6789</placa>
      <disponivel>false</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Renault Master</modelo>
      <ano>2020</ano>
      <placa>MNO-3456</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Scania P360</modelo>
      <ano>2021</ano>
      <placa>PQR-7890</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Volvo FH540</modelo>
      <ano>2021</ano>
      <placa>STU-5678</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Chevrolet S10</modelo>
      <ano>2017</ano>
      <placa>VWX-1234</placa>
      <disponivel>false</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Toyota Hilux</modelo>
      <ano>2019</ano>
      <placa>YZA-9101</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>MAN TGX</modelo>
      <ano>2022</ano>
      <placa>BCD-2345</placa>
      <disponivel>true</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Mercedes-Benz Actros</modelo>
      <ano>2023</ano>
      <placa>EFG-6789</placa>
      <disponivel>false</disponivel>
    </veiculo>
    <veiculo>
      <modelo>Relampago Marquinhos</modelo>
      <ano>2024</ano>
      <placa>KCT-4200</placa>
      <disponivel>true</disponivel>
    </veiculo>
  </veiculos>
</frota>
`;



function parseXML(xmlString) {
  const parser = new DOMParser();
  const xmlDocumento = parser.parseFromString(xmlString, 'text/xml');
  return xmlDocumento;
}

function xmlToObject(xmlDoc) {
  const veiculos = xmlDoc.querySelectorAll('veiculo');
  const companyXml = xmlDoc.querySelector('informacoes');
  const veiculoHtml = document.getElementById('veiculos');
  const companyData = document.getElementById('company-details');
  const headingCompany = document.getElementById('title');

  headingCompany.innerHTML = `
   <h1>Frota de Veículos - ${companyXml.querySelector('nomeEmpresa').textContent}</h1>
  `

  companyData.innerHTML = `
                  <div>
                    <p><strong>Nome da Empresa:</strong>${companyXml.querySelector('nomeEmpresa').textContent}</p>
                    <p><strong>Telefone:</strong>${companyXml.querySelector('telefone').textContent}</p>
                </div>
                <div>
                    <p><strong>Sede:</strong></p>
                    <p>${companyXml.querySelector('rua').textContent}</p>
                    <p>${companyXml.querySelector('cidade').textContent}</p>
                    <p>${companyXml.querySelector('cep').textContent}</p>
                </div>
  `;

  console.log(veiculoHtml);
  const veiculoList = [];
  for (let veiculo of veiculos) {
      let nome = veiculo.querySelector('modelo').textContent;
      let ano = veiculo.querySelector('ano').textContent;
      let placa = veiculo.querySelector('placa').textContent;
      let disponivel = veiculo.querySelector('disponivel').textContent;
      const formatDisponivel = (disponivel) => disponivel === `true` ? 'Sim' : 'Nao';
      disponivel = formatDisponivel(disponivel);
      veiculoHtml.innerHTML += `
      <tr>
                        <td>${nome}</td>
                        <td>${ano}</td>
                        <td>${placa}</td>
                        <td>${disponivel}</td>
                    </tr>
      `
      veiculoList.push(veiculoHtml);
  }
  
  return veiculoList;
};

const xmlDocument = parseXML(xmlString);
const veiculoList = xmlToObject(xmlDocument);
console.log(veiculoList)