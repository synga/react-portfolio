import { LinkInterface } from '../../components/Link/Link.interface';

export interface ProjectInterface {
  ano: number;
  nome: string;
  descricao: string;
  duracao: string;
  ordem: number;
  tecnologias: string;
  foto: string;
  links?: LinkInterface[];
}
