import Block from "components/services/widget/block";
import Container from "components/services/widget/container";

import useWidgetAPI from "utils/proxy/use-widget-api";

export default function Component({ service }) {
    const { widget } = service;

    if (!widget.fields) {
        widget.fields = ["workflows", "active", "executions", "failed"];
    }

    const { data: workflowsData, error: workflowsError } = useWidgetAPI(widget, "workflows");

    const { data: executionsData, error: executionsError } = useWidgetAPI(widget, "executions", {
        limit: 100,
    });

    if (workflowsError || executionsError) {
        const error = workflowsError ?? executionsError;
        return <Container service={service} error={error} />;
    }

    if (!workflowsData || !executionsData) {
        return (
            <Container service={service}>
                <Block label="n8n.workflows" />
                <Block label="n8n.active" />
                <Block label="n8n.executions" />
                <Block label="n8n.failed" />
            </Container>
        );
    }

    // Handle error responses
    if (workflowsData.error || workflowsData.message) {
        return <Container service={service} error={workflowsData?.error ?? workflowsData} />;
    }

    // Get workflow data - n8n API returns { data: [...workflows] }
    const workflows = workflowsData.data ?? workflowsData ?? [];
    const totalWorkflows = Array.isArray(workflows) ? workflows.length : 0;
    const activeWorkflows = Array.isArray(workflows) ? workflows.filter((w) => w.active).length : 0;

    // Get execution data - n8n API returns { data: [...executions] }
    const executions = executionsData.data ?? executionsData ?? [];
    const totalExecutions = Array.isArray(executions) ? executions.length : 0;
    const failedExecutions = Array.isArray(executions)
        ? executions.filter((e) => e.status === "failed" || e.finished === false).length
        : 0;

    return (
        <Container service={service}>
            <Block label="n8n.workflows" value={totalWorkflows} />
            <Block label="n8n.active" value={activeWorkflows} />
            <Block label="n8n.executions" value={totalExecutions} />
            <Block label="n8n.failed" value={failedExecutions} />
        </Container>
    );
}
