import type { S3ClientConfig } from '@aws-sdk/client-s3';
import { Endpoint, EndpointV2, Provider } from '@smithy/types';

export interface CustomS3ClientConfig extends S3ClientConfig {
	readEndpoint?: string | Provider<string> | Endpoint | Provider<Endpoint> | EndpointV2 | Provider<EndpointV2>;
}
