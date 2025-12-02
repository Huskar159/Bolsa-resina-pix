import { AppHeader } from "@/components/layout/AppHeader";
import { BottomNav } from "@/components/layout/BottomNav";
import { ChevronLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Fornecedores = () => {
  // Lista de fornecedores - você pode adicionar mais conforme necessário
  const suppliers = [
    {
      name: "Fornecedor de Kit Resina",
      category: "Resinas",
      link: "https://shopee.com.br/product/426728929/21150470320?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMVpoMjZGSUhSZi9iNVZ5WGlzemcyaThLSGJFQ1hKQzBMT2NZU2NiaHZZQXBPTkFWM0F5WkJaSDJhcndMNVlkZU41RWNMbVB3WUczRis5Z20yWm9ReC9VNytwQXNKVE1kaktyNFBJTzQzQW5DZmZETnNDSEg1V0dSdGQ4RUdqS2NBPQ&uls_trackid=546j5m2q035g&utm_campaign=id_z6FZTAMhPE&utm_content=----&utm_medium=affiliates&utm_source=an_18187360013&utm_term=dykx613i35gk",
      description: "Kit completo de resina epóxi para iniciar seus projetos"
    },
    {
      name: "Fornecedor de Kit Gliters",
      category: "Gliters",
      link: "https://shopee.com.br/product/420367953/19897653527?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMGIweTBlUS9ocTUrVS9UKzFDVXlraFpSRnczS29SY2M3NE10QUM4SnY1eC83Vkp4WWJYUTBqQkN6SlBvdS9VUGIzSklOakt5d1c2emRDaW40Q3RDOHdBQTdCUXJCWUlDdUJHUXB1WnBiKzNNY1JDU3J0VDJqZ0VGS3pHREM1TWNVPQ&uls_trackid=546j5mh5015g&utm_campaign=id_Vev9KyyjAO&utm_content=----&utm_medium=affiliates&utm_source=an_18187360013&utm_term=dykx6djscobu",
      description: "Kit com variedade de gliters para decorar suas peças"
    },
    {
      name: "Fornecedor de Pigmentos Metálicos",
      category: "Pigmentos",
      link: "https://shopee.com.br/product/422089920/21598876075?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMmRuMHVyWFkydW9HbzRoQXAxSTJTYzA2dXd0NUdPNXlwR2lPNWU0czdWekpCdXZMK0pjbFA1dyt5Tm5lUUlVN0ljMFAxUjc0UnV1dkVlekg5SXp5ZmY3a1JwYVRFVTErQU02V2NtalFnQmtsRHpiYXFiV2F3KzUralRkajJJYXU0PQ&uls_trackid=546j5n14005o&utm_campaign=id_BwaJcRjOTg&utm_content=----&utm_medium=affiliates&utm_source=an_18187360013&utm_term=dykx6see8u43",
      description: "Pigmentos metálicos para dar efeito especial às suas criações",
    },
    {
      name: "Alça de Bolsa",
      category: "Acessórios",
      link: "https://shopee.com.br/Kit-6-al%C3%A7as-de-corrente-2-grafite-2-dourado-e-2-prata-kit-i.931712774.20397668781?extraParams=%7B%22display_model_id%22%3A199594355702%2C%22model_selection_logic%22%3A3%7D&sp_atk=14c22505-b46f-4012-89ef-67912b31e7cd&xptdk=14c22505-b46f-4012-89ef-67912b31e7cd",
      description: "Kit de alças para bolsa — correntes em grafite, dourado e prata"
    },
    {
      name: "Molde de Bolsa",
      category: "Moldes",
      link: "https://shopee.com.br/product/253101930/45800855391?gads_t_sig=VTJGc2RHVmtYMTlxTFVSVVRrdENkVHQ3ZkZSUTMrR3pBWmZZNzdrcnRBMk8wTm9EVFRqZEFpY0EyNlRqL1Rpd0xmQjkzVTR0bkRsS2RSL0tjUEp4eWd2bVZqQkNvVTlEa2dKeTJhOXhlWTlqU0F2L2lSMUF6bWlJNkNBY0htUUM2VXpmUmd1QitNL2ViNUJFVmZxTEJ1VW55RGJvdStnV253SThEVmtjaXl3PQ&mmp_pid=an_18372430004&share_channel_code=1&uls_trackid=54b15hbr02b1&utm_campaign=id_UHh1wkEB9r&utm_content=----&utm_medium=affiliates&utm_source=an_18372430004&utm_term=e2ms7y7kdpnc",
      description: "Molde para confecção de bolsas"
    },
    {
      name: "Dobradiça para Bolsa",
      category: "Ferragens",
      link: "https://shopee.com.br/Dobradi%C3%A7a-Mini-3-4-Decora%C3%A7%C3%A3o-Artesanato-Caixa-MDF-25-Pe%C3%A7as-Parafusos-i.644779610.18542987440?extraParams=%7B%22display_model_id%22%3A189593017058%2C%22model_selection_logic%22%3A3%7D&sp_atk=a7645b3b-3f57-4365-b8a3-943304d1e879&xptdk=a7645b3b-3f57-4365-b8a3-943304d1e879",
      description: "Dobradiças mini para aplicações em bolsas e artesanato"
    },
    {
      name: "Fechadura para Bolsa",
      category: "Fechaduras",
      link: "https://shopee.com.br/Fecho-Met%C3%A1lico-Fechadura-De-Metal-L%C3%ADngua-De-Pato-Saco-Ferragens-Pe%C3%A7as-Fechaduras-De-Polegar-Para-Bolsas-De-M%C3%A3o-Ombro-Fazendo-Couro-5Pcs-Artesanato-De-Bricolagem-i.348901909.23191409721?extraParams=%7B%22display_model_id%22%3A169692334041%2C%22model_selection_logic%22%3A3%7D&sp_atk=823083ba-f148-4648-96c3-57327988cca7&xptdk=823083ba-f148-4648-96c3-57327988cca7",
      description: "Fechos metálicos tipo língua de pato para bolsas"
    },
    {
      name: "Porta Alça",
      category: "Acessórios",
      link: "https://shopee.com.br/Kit-10-Unidades-Porta-Al%C3%A7a-Bolsa-Corrente-Chaveiro-Suporte-Garra-i.320460124.18898515094?extraParams=%7B%22display_model_id%22%3A119856002499%2C%22model_selection_logic%22%3A3%7D&sp_atk=e907fd03-3d8a-4448-a2ee-3452c98f9440&xptdk=e907fd03-3d8a-4448-a2ee-3452c98f9440",
      description: "Porta alça / suporte para fixação de alças e correntes"
    }
  ];
  
  return (
    <div className="min-h-screen bg-background pb-20">
      <AppHeader />
      
      <div className="px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-4">
          <ChevronLeft className="w-5 h-5" />
          <span className="font-semibold">Voltar</span>
        </Link>
        
        <h1 className="text-3xl font-bold text-foreground mb-2">Fornecedores</h1>
        <p className="text-muted-foreground mb-6">
          Lista de fornecedores recomendados para seus materiais
        </p>
        
        <div className="space-y-4">
          {suppliers.map((supplier, index) => (
            <div 
              key={index}
              className="bg-card p-5 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex-1">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full mb-2">
                    {supplier.category}
                  </span>
                  <h3 className="text-lg font-bold text-card-foreground mb-1">
                    {supplier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {supplier.description}
                  </p>
                </div>
              </div>
              
              <Button 
                className="w-full mt-3 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                onClick={() => window.open(supplier.link, '_blank')}
              >
                Acessar Fornecedor
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
        {/* Bloco de dúvidas removido conforme solicitado */}
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Fornecedores;
