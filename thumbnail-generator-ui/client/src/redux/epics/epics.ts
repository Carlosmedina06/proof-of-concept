import { from } from 'rxjs'
import { catchError, map, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'

import { fileUpload } from '../../utils'
import { uploadImageSuccess, uploadImageFailure, UPLOAD_IMAGE } from '../actions/actions'

const uploadImageEpic = (action$: any) =>
  action$.pipe(
    ofType(UPLOAD_IMAGE),
    switchMap((action: any) =>
      from(fileUpload(action.payload[0].file)).pipe(
        map((url: any) => uploadImageSuccess(url.toString())),
        catchError(async () => uploadImageFailure()),
      ),
    ),
  )

export default uploadImageEpic
