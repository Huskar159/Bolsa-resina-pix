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
      description: "Pigmentos metálicos para dar efeito especial às suas criações"
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
