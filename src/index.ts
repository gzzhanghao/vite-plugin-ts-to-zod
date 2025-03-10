import { GenerateProps, generate } from '@gzzhanghao/ts-to-zod';
import type { PluginOption } from 'vite';

export type Options = Omit<
  GenerateProps,
  'sourceText' | 'inputOutputMappingFn'
>;

const zod = (options?: Options): PluginOption => {
  return {
    name: 'vite:ts-to-zod',
    enforce: 'pre',
    transform(sourceText, id) {
      if (!id.endsWith('?zod')) {
        return;
      }
      const { getZodSchemasFile } = generate({
        ...options,
        sourceText,
        inputOutputMappingFn: (input) => ({
          output: `${input}?zod`,
          getSchemaName: options?.getSchemaName,
        }),
      });
      return getZodSchemasFile(id.slice(0, -4));
    },
  };
};

export default zod;
