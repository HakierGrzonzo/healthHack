/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { Age } from './Age';
import type { Annotation } from './Annotation';
import type { Attachment } from './Attachment';
import type { CodeableConcept } from './CodeableConcept';
import type { Coding } from './Coding';
import type { ContactDetail } from './ContactDetail';
import type { ContactPoint } from './ContactPoint';
import type { Contributor } from './Contributor';
import type { Count } from './Count';
import type { DataRequirement } from './DataRequirement';
import type { Distance } from './Distance';
import type { Dosage } from './Dosage';
import type { Duration } from './Duration';
import type { Expression } from './Expression';
import type { HumanName } from './HumanName';
import type { Identifier } from './Identifier';
import type { Meta } from './Meta';
import type { Money } from './Money';
import type { ParameterDefinition } from './ParameterDefinition';
import type { Period } from './Period';
import type { Quantity } from './Quantity';
import type { Range } from './Range';
import type { Ratio } from './Ratio';
import type { Reference } from './Reference';
import type { RelatedArtifact } from './RelatedArtifact';
import type { SampledData } from './SampledData';
import type { Signature } from './Signature';
import type { Timing } from './Timing';
import type { TriggerDefinition } from './TriggerDefinition';
import type { UsageContext } from './UsageContext';

export type Extension = {
    id: string;
    /**
     * identifies the meaning of the extension
     */
    url?: string;
    value?: any;
    valueAddress?: Address;
    valueAge?: Age;
    valueAnnotation?: Annotation;
    valueAttachment?: Attachment;
    valueBase64Binary?: string;
    valueBoolean?: boolean;
    valueCanonical?: string;
    valueCode?: string;
    valueCodeableConcept?: CodeableConcept;
    valueCoding?: Coding;
    valueContactDetail?: ContactDetail;
    valueContactPoint?: ContactPoint;
    valueContributor?: Contributor;
    valueCount?: Count;
    valueDataRequirement?: DataRequirement;
    valueDate?: string;
    valueDateTime?: string;
    valueDecimal?: number;
    valueDistance?: Distance;
    valueDosage?: Dosage;
    valueDuration?: Duration;
    valueExpression?: Expression;
    valueHumanName?: HumanName;
    valueId?: string;
    valueIdentifier?: Identifier;
    valueInstant?: string;
    valueInteger?: number;
    valueMarkdown?: string;
    valueMeta?: Meta;
    valueMoney?: Money;
    valueOid?: string;
    valueParameterDefinition?: ParameterDefinition;
    valuePeriod?: Period;
    valuePositiveInt?: number;
    valueQuantity?: Quantity;
    valueRange?: Range;
    valueRatio?: Ratio;
    valueReference?: Reference;
    valueRelatedArtifact?: RelatedArtifact;
    valueSampledData?: SampledData;
    valueSignature?: Signature;
    valueString?: string;
    valueTime?: string;
    valueTiming?: Timing;
    valueTriggerDefinition?: TriggerDefinition;
    valueUnsignedInt?: number;
    valueUri?: string;
    valueUrl?: string;
    valueUsageContext?: UsageContext;
    valueUuid?: string;
};

