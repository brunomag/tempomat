import { Command, flags } from '@oclif/command'
import { appName } from '../appName'
import tempo from '../tempo'
import globalFlags from '../globalFlags'

export default class Reports extends Command {
    static description = '[or r], reports based on JQL filter IDs.'

    static examples = [
        `${appName} reports 123456`,
        `${appName} r 123456`,
        `${appName} reports 123456 123457`
    ]

    static strict = false

    static aliases = ['r']

    static flags = {
        help: flags.help({ char: 'h' }),
        debug: flags.boolean()
    }

    static args = [
        {
            name: 'filter_id',
            description: 'filter ids to report, like 123456',
            required: true
        }
    ]

    async run() {
        const { argv, flags } = this.parse(Reports)
        globalFlags.debug = flags.debug
        await tempo.reportsFilters(argv)
    }
}
