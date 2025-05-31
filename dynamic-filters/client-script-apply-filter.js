/**
 * @param {params} params
 * @param {api} params.api
 * @param {any} params.event
 * @param {any} params.imports
 * @param {ApiHelpers} params.helpers
 */
function applyFilter({
    api,
    event,
    imports
}) {
    var filterJson = {
        "elementId": "filter_1",
        "name": "SN_COMPONENT_FILTER#APPLIED_ITEMS",
        "payload": {
            "appliedFilters": [{
                "order": 9000,
                "filterId": "1isjprgavul2kjd1nacg",
                "type": "reference",
                "label": "Incident",
                "source": {
                    "payload": {
                        "primaryKey": "sys_id",
                        "table": "task"
                    },
                    "type": "table"
                },
                "values": [
                    "57af7aec73d423002728660c4cf6a71c"
                ],
                "include_unmatched_or_empty": false,
                "apply_to": [
                    "task_sla.task"
                ]
            }]
        },
        "context": {},
        "eventInfo": {
            "sourceElementId": "9e9e48da27c84b9d88772dcd2"
        }
    };
    
    filterJson.payload.appliedFilters[0].values[0] = api.context.props.sysId;
    api.setState('parFilters', ({
        currentValue
    }) => {
        const {
            payload: {
                appliedFilters
            }
        } = filterJson;
        console.log(JSON.stringify(filterJson));
        return imports['global.mergePARFilters']()(currentValue, appliedFilters);
    });
}
