import { Container } from './styles';
import { Rating } from '../Rating';
import { Tag } from '../Tag';

export function MoviesNote({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            <Rating></Rating>
            
            <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...
            </p>
            
            
            {
                data.tag &&
                <footer>
                    {
                        data.tags.map(tag => <Tag key={tag.id} title={tag.name} />)
                    }
                </footer>
            }
            
        </Container>
    )
}