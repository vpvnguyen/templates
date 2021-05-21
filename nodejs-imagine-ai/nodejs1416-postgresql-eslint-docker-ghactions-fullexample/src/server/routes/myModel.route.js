import { Router } from 'express';
import { validate } from 'express-validation';
import { MyModelController } from 'server/controllers';
import { myModelValidation, options } from 'server/validations';


const router = Router();

router.get('/', validate(myModelValidation.getAll, options), MyModelController.getAll);

router.get('/:id', MyModelController.get);

router.post('/', validate(myModelValidation.create, options), MyModelController.create);

router.put('/:id', validate(myModelValidation.update, options), MyModelController.update);

router.patch('/:id', validate(myModelValidation.partialUpdate, options), MyModelController.partialUpdate);

router.delete('/:id', validate(myModelValidation.destroy, options), MyModelController.destroy);

export { router as myModelRouter };

