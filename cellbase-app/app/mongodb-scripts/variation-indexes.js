
/*
 * Copyright 2015 OpenCB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

db.getCollection('variation').createIndex({'_chunkIds': 1})
db.getCollection('variation').createIndex({'chromosome': 1, "start": 1, "end":1})
db.getCollection('variation').createIndex({'chromosome': 1, "cv.ciStartLeft": 1, "cv.ciStartRight": 1,
    "cv.ciEndLeft": 1, "cv.ciEndRight": 1})
db.getCollection('variation').createIndex({'id': 1})
db.getCollection('variation').createIndex({'type': 1})
db.getCollection('variation').createIndex({'annotation.xrefs': 1})
db.getCollection('variation').createIndex({'annotation.displayConsequenceType': 1})
db.getCollection('variation').createIndex({'annotation.consequenceTypes.geneName': 1})
db.getCollection('variation').createIndex({'annotation.consequenceTypes.ensemblGeneId': 1})
db.getCollection('variation').createIndex({'annotation.consequenceTypes.ensemblTranscriptId': 1})
db.getCollection('variation').createIndex({'annotation.consequenceTypes.sequenceOntologyTerms.name': 1})
