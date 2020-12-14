import { Mapper } from 'src/app/domain/base/mapper';
import { Genre } from 'src/app/domain/model/genre.model';
import { GenreEntity } from '../movies-api-repository/genres-entity-model';

export class GenreEntityMapper extends Mapper<GenreEntity, Genre> {
    mapFrom(param: GenreEntity): Genre {
        return {
            name: param.name,
            id: param.id
        }
    }
    mapTo(param: Genre): GenreEntity {
         // TO DO: map GenreEntity to Genre when needed
         throw new Error('Method not implemented.');
    }

}
